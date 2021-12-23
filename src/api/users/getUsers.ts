import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function getUsers(_req: NextApiRequest, res: NextApiResponse) {
  const response = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      role: true
    }
  })

  if (!response) {
    throw new ExceptionError('No data found')
  }

  res.status(200).json(response)
}
