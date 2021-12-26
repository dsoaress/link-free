import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'

import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'
import { env } from 'constants/env'

import type { User } from '@prisma/client'

export class AuthService {
  async auth(username: string, password: string) {
    if (!username || !password) {
      throw new ExceptionError('Username and password are required')
    }

    const user = await prisma.user.findUnique({
      where: { username }
    })

    if (!user) {
      throw new ExceptionError('Credentials are invalid', 401)
    }

    const isValidPassword = await compare(password, user.password)

    if (!isValidPassword) {
      throw new ExceptionError('Credentials are invalid', 401)
    }

    const { accessToken, refreshToken } = await this.createSession(user)

    return { accessToken, refreshToken }
  }

  async refreshToken(token: string) {
    if (!token) {
      throw new ExceptionError('Refresh Token required')
    }

    const session = await prisma.session.findUnique({
      where: { id: token }
    })

    if (!session) {
      throw new ExceptionError('Refresh Token are invalid', 401)
    }

    const isSessionExpired = new Date(session.expiresAt) < new Date()

    if (isSessionExpired) {
      await prisma.session.delete({
        where: { id: token }
      })

      throw new ExceptionError('Refresh Token are expired', 401)
    }

    const user = await prisma.user.findUnique({
      where: { id: session.userId }
    })

    if (!user) {
      throw new ExceptionError('User not found', 401)
    }

    const tokens = await this.createSession(user)

    await prisma.session.delete({
      where: { id: token }
    })

    return { accessToken: tokens.accessToken, refreshToken: tokens.refreshToken }
  }

  private async createSession(user: User) {
    const { SESSION_EXPIRES_IN_MS, JWT_EXPIRES_IN, JWT_SECRET } = env

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
}
