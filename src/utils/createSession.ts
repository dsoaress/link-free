import jwt from 'jsonwebtoken'

import { authConstants } from 'constants/auth'
import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { User } from '@prisma/client'

export async function createSession(user: User) {
  const { SESSION_EXPIRES_IN_MS, JWT_EXPIRES_IN, JWT_SECRET } = authConstants

  try {
    const session = await prisma.session.create({
      data: {
        userId: user.id,
        expiresAt: new Date(Date.now() + SESSION_EXPIRES_IN_MS)
      }
    })

    const payload = { role: user.role, sub: user.id }
    const accessToken = jwt.sign(payload, JWT_SECRET!, {
      expiresIn: `${JWT_EXPIRES_IN}m`
    })

    return { accessToken, refreshToken: session.id }
  } catch (err: any) {
    throw new ExceptionError(err)
  }
}
