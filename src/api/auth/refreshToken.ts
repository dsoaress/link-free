import { prisma } from 'services/prisma'
import { createSession } from 'utils/createSession'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function refreshToken(req: NextApiRequest, res: NextApiResponse) {
  const { refreshToken } = req.body

  if (!refreshToken) {
    throw new ExceptionError('Refresh Token required')
  }

  const session = await prisma.session.findUnique({
    where: { id: refreshToken }
  })

  if (!session) {
    throw new ExceptionError('Refresh Token are invalid', 401)
  }

  const isSessionExpired = new Date(session.expiresAt) < new Date()

  if (isSessionExpired) {
    await prisma.session.delete({
      where: { id: refreshToken }
    })

    throw new ExceptionError('Refresh Token are expired', 401)
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId }
  })

  if (!user) {
    throw new ExceptionError('User not found', 401)
  }

  const tokens = await createSession(user)

  await prisma.session.delete({
    where: { id: refreshToken }
  })

  res.status(200).json({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken })
}
