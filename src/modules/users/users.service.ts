import { compare, hashSync } from 'bcryptjs'

import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { Role } from '@prisma/client'

export class UsersService {
  async createUser(username: string, password: string, role: Role = 'EDITOR', userRole: Role) {
    if (!username || !password) {
      throw new ExceptionError('Username and password are required')
    }

    if (!['ADMIN', 'EDITOR'].includes(role)) {
      throw new ExceptionError('Role must be either ADMIN or EDITOR')
    }

    if (userRole !== 'ADMIN') {
      throw new ExceptionError('Only admins can create users', 403)
    }

    const usernameExists = await this.checkUserExists(username)

    if (usernameExists) {
      throw new ExceptionError('Username already exists')
    }

    const response = await prisma.user.create({
      data: {
        username: username,
        password: hashSync(password, 10),
        role: role ? role : 'EDITOR'
      },
      select: {
        id: true,
        username: true,
        role: true
      }
    })

    if (!response) {
      throw new ExceptionError('User not created')
    }

    return response
  }

  async getUser(userId: number, withPassword = false) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        password: withPassword,
        lang: true,
        role: true
      }
    })

    if (!user) {
      throw new ExceptionError('User not found', 404)
    }

    return user
  }

  async getUsers() {
    console.log('getUsers')
    const response = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        lang: true,
        role: true
      }
    })

    console.log(response)

    if (!response) {
      throw new ExceptionError('No data found', 404)
    }

    return response
  }

  async updateUser(
    userId: number,
    userRole: Role,
    oldPassword?: string,
    password?: string,
    role?: Role
  ) {
    const user = await this.getUser(userId, true)

    let updatedUser = {}

    if (oldPassword && password) {
      const isValidPassword = await compare(oldPassword, user.password)

      if (!isValidPassword) {
        throw new ExceptionError('Password does not match')
      }

      updatedUser = { ...updatedUser, password: hashSync(password, 10) }
    }

    if (role) {
      if (!['ADMIN', 'EDITOR'].includes(role)) {
        throw new ExceptionError('Role must be either ADMIN or EDITOR')
      }

      if (userRole === 'ADMIN' && role === 'EDITOR') {
        throw new ExceptionError('Cannot downgrade admin role', 403)
      }

      if (role !== 'EDITOR' && userRole === 'EDITOR') {
        throw new ExceptionError('Cannot change role', 403)
      }

      updatedUser = { ...updatedUser, role }
    }

    if (Object.keys(updatedUser).length === 0) {
      throw new ExceptionError('No data to update')
    }

    const response = await prisma.user.update({
      where: { id: userId },
      data: updatedUser,
      select: {
        id: true,
        username: true,
        lang: true,
        role: true
      }
    })

    if (!response) {
      throw new ExceptionError('User not updated')
    }

    return response
  }

  async deleteUser(userId: number, userRole: Role) {
    if (userId === 1) {
      throw new ExceptionError('Cannot delete default admin', 403)
    }

    if (userRole !== 'ADMIN') {
      throw new ExceptionError('Only admins can delete other users', 403)
    }

    try {
      await prisma.user.delete({
        where: { id: userId }
      })
    } catch (err: any) {
      throw new ExceptionError(err)
    }
  }

  async checkUserExists(username: string) {
    const user = await prisma.user.findUnique({
      where: { username }
    })

    return !!user
  }
}
