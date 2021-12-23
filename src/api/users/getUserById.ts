import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function getUserById(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.params

  const response = await prisma.user.findUnique({
    where: { id: +id },
    select: {
      id: true,
      username: true,
      role: true
    }
  })

  if (!response) {
    throw new ExceptionError('No data found', 404)
  }

  res.status(200).json(response)
}
