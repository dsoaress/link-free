import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { prisma } from '../../services/prisma'

const handler = nc<NextApiRequest, NextApiResponse>({
  onNoMatch: (_req, res) => {
    res.status(404).json({ error: 'Not found' })
  },
  onError: (err, _req, res) => {
    res.status(500).json({ error: err.message })
  }
})
  .get(async (_req, res) => {
    const response = await prisma.data.findUnique({
      where: { id: 1 }
    })

    if (!response) {
      throw new Error('No data found')
    }

    res.status(200).json(response?.data)
  })

  .put(async (req, res) => {
    const { data } = req.body

    if (!data) {
      throw new Error('No data provided')
    }

    try {
      const response = await prisma.data.update({
        where: { id: 1 },
        data: { data: JSON.stringify(req.body.data) }
      })

      res.status(200).json(response)
    } catch (err: any) {
      console.error(err)
      res.status(500).json({ error: err.message })
    }
  })

export default handler
