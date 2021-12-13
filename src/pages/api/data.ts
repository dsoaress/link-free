import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { prisma } from '../../services/prisma'
const { RAILWAY_TOKEN } = process.env

const handler = nc<NextApiRequest, NextApiResponse>()
  .get(async (_req, res) => {
    try {
      const data = await prisma.data.findFirst()
      res.status(200).json(data?.data)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
  })

  .put(async (req, res) => {
    try {
      const response = await prisma.data.update({
        where: {
          id: 1
        },
        data: { data: JSON.stringify(req.body.data) }
      })

      if (RAILWAY_TOKEN) {
        console.log('railway token', RAILWAY_TOKEN)
      }

      res.status(200).json(response)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
  })

export default handler
