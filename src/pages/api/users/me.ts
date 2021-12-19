import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { prisma } from '../../../services/prisma'
import { authMiddleware } from '../../../utils/authMiddleware'
import { ExceptionError } from '../../../utils/error'

interface Request extends NextApiRequest {
  userId: string
  userRole: string
}

const handler = nc<Request, NextApiResponse>({
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
})
  .use(authMiddleware)
  .get(async (req, res) => {
    const { userId } = req
    const response = await prisma.user.findUnique({
      where: { id: +userId },
      select: {
        id: true,
        username: true,
        role: true
      }
    })

    if (!response) {
      throw new ExceptionError('User not found')
    }

    res.status(200).json(response)
  })

export default handler
