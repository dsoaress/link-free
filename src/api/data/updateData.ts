import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function updateData(req: NextApiRequest, res: NextApiResponse) {
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
}
