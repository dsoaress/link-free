import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function getData(_req: NextApiRequest, res: NextApiResponse) {
  const response = await prisma.data.findUnique({
    where: { id: 1 }
  })

  if (!response) {
    throw new ExceptionError('No data found')
  }

  res.status(200).json(response?.data)
}
