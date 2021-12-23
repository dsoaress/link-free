import nextConnect from 'next-connect'
import { Prisma } from '@prisma/client'

import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export const nc = nextConnect<NextApiRequest, NextApiResponse>({
  attachParams: true,
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
