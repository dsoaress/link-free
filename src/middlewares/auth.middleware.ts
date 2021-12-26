import jwt from 'jsonwebtoken'

import { env } from 'constants/env'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'
import type { Role } from '@prisma/client'

type Token = {
  sub: string
  role: Role
}

export async function authMiddleware(req: NextApiRequest, _res: NextApiResponse, next: () => void) {
  const { JWT_SECRET } = env
  const token = req.headers['authorization']

  if (!token) {
    throw new ExceptionError('No token provided', 401)
  }

  const [, tokenValue] = token.split(' ')

  const isValidToken = jwt.verify(tokenValue, JWT_SECRET!) as Token

  if (!isValidToken) {
    throw new ExceptionError('Invalid token', 401)
  }

  req.userId = isValidToken.sub
  req.userRole = isValidToken.role

  next()
}
