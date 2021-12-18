import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { prisma } from '../../services/prisma'
// import { authMiddleware } from '../../utils/authMiddleware'
import { ExceptionError } from '../../utils/error'

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
})
  .get(async (_req, res) => {
    const response = await prisma.data.findUnique({
      where: { id: 1 }
    })

    if (!response) {
      throw new ExceptionError('No data found')
    }

    res.status(200).json(response?.data)
  })
  // .use(authMiddleware)
  .put(async (req, res) => {
    const { data } = req.body

    if (!data) {
      throw new ExceptionError('No data provided')
    }

    try {
      const response = await prisma.data.update({
        where: { id: 1 },
        data: { data: JSON.stringify(req.body.data) }
      })

      res.status(200).json(response)
    } catch (err: any) {
      throw new ExceptionError(err)
    }
  })

export default handler
