import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'

import { prisma } from '../services/prisma'
import { ExceptionError } from './error'

const EXPIRES_IN = 30 // days
const EXPIRES_IN_MS = EXPIRES_IN * 24 * 60 * 60 * 1000

export async function createSession(user: User) {
  const { JWT_SECRET } = process.env

  if (!JWT_SECRET) {
    throw new ExceptionError('JWT_SECRET is not defined')
  }

  try {
    const session = await prisma.session.create({
      data: {
        userId: user.id,
        expiresAt: new Date(Date.now() + EXPIRES_IN_MS)
      }
    })

    const payload = { role: user.role, sub: user.id }
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '15m'
    })

    return { token, refreshToken: session.id }
  } catch (err: any) {
    throw new ExceptionError(err)
  }
}
