import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function me(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req
  const response = await prisma.user.findUnique({
    where: { id: +userId },
    select: {
      id: true,
      username: true,
      lang: true,
      role: true
    }
  })

  if (!response) {
    throw new ExceptionError('User not found', 404)
  }

  res.status(200).json(response)
}
