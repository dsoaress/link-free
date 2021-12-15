import { Prisma } from '@prisma/client'
import { compare } from 'bcryptjs'
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
  const { username, password } = req.body

  if (!username || !password) {
    throw new ExceptionError('Username and password are required')
  }

  const user = await prisma.user.findUnique({
    where: { username }
  })

  if (!user) {
    throw new ExceptionError('Credentials are invalid', 401)
  }

  const isValidPassword = await compare(password, user.password)

  if (!isValidPassword) {
    throw new ExceptionError('Credentials are invalid', 401)
  }

  const { token, refreshToken } = await createSession(user)

  res.status(200).json({ token, refreshToken })
})

export default handler
