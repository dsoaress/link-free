import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.params

  if (id === '1') {
    throw new ExceptionError('Cannot delete admin', 403)
  }

  if (req.userRole !== 'ADMIN') {
    throw new ExceptionError('Only admins can delete other users')
  }

  try {
    await prisma.user.delete({
      where: { id: +id }
    })

    res.status(204).end()
  } catch (err: any) {
    throw new ExceptionError(err)
  }
}
