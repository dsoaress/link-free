import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import { ExceptionError } from './error'

interface Request extends NextApiRequest {
  userId: string
  userRole: string
}

type Token = {
  sub: string
  role: string
}

export async function authMiddleware(req: Request, _res: NextApiResponse, next: () => void) {
  const token = req.headers['authorization']

  if (!token) {
    throw new ExceptionError('No token provided', 401)
  }

  const [, tokenValue] = token.split(' ')

  const { JWT_SECRET } = process.env

  if (!JWT_SECRET) {
    throw new ExceptionError('JWT_SECRET is not defined')
  }

  const isValidToken = jwt.verify(tokenValue, JWT_SECRET) as Token

  if (!isValidToken) {
    throw new ExceptionError('Invalid token', 401)
  }

  req.userId = isValidToken.sub
  req.userRole = isValidToken.role

  next()
}
