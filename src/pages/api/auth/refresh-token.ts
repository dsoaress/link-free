import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { prisma } from '../../../services/prisma'
import { createSession } from '../../../utils/createSession'
import { ExceptionError } from '../../../utils/error'

const handler = nc<NextApiRequest, NextApiResponse>({
  onNoMatch: (_req, res) => {
    res.status(404).json({ error: 'Not found' })
  },
  onError: (err, _req, res) => {
    if (err instanceof ExceptionError) {
      res.status(err.status).json({
        status: err.status,
        error: err.message
      })
    } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(400).json({
        status: 400,
        error: err.message
      })
    } else {
      res.status(500).json({
        status: 500,
        error: err.message
      })
    }
  }
}).post(async (req, res) => {
  const { refreshToken } = req.body

  if (!refreshToken) {
    throw new ExceptionError('Refresh Token required')
  }

  const session = await prisma.session.findUnique({
    where: { id: refreshToken }
  })

  if (!session) {
    throw new ExceptionError('Refresh Token are invalid', 401)
  }

  const isSessionExpired = new Date(session.expiresAt) < new Date()

  if (isSessionExpired) {
    await prisma.session.delete({
      where: { id: refreshToken }
    })

    throw new ExceptionError('Refresh Token are expired', 401)
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId }
  })

  if (!user) {
    throw new ExceptionError('User not found', 401)
  }

  const tokens = await createSession(user)

  await prisma.session.delete({
    where: { id: refreshToken }
  })

  res.status(200).json({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken })
})

export default handler
