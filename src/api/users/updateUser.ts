import { compare, hashSync } from 'bcryptjs'

import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.params
  const { oldPassword, password, role } = req.body
  const user = await prisma.user.findUnique({
    where: { id: +id }
  })

  let updatedUser = {}

  if (!user) {
    throw new ExceptionError('No user found', 404)
  }

  // if (req.userRole !== 'ADMIN' || req.userId !== id) {
  //   throw new ExceptionError('Only admins can update other users')
  // }

  if (oldPassword && password) {
    const isValidPassword = await compare(oldPassword, user.password)

    if (!isValidPassword) {
      throw new ExceptionError('Password does not match')
    }

    updatedUser = { password: hashSync(password, 10) }
  }

  if (role) {
    if (!['ADMIN', 'EDITOR'].includes(role)) {
      throw new ExceptionError('Role must be either ADMIN or EDITOR')
    }

    if (user.role === 'ADMIN' && role === 'EDITOR') {
      throw new ExceptionError('Cannot downgrade admin role', 403)
    }

    if (role !== 'EDITOR' && user.role === 'EDITOR') {
      throw new ExceptionError('Cannot change role', 403)
    }

    updatedUser = { ...updatedUser, role }
  }

  try {
    const response = await prisma.user.update({
      where: { id: +id },
      data: updatedUser,
      select: {
        id: true,
        username: true,
        lang: true,
        role: true
      }
    })

    res.status(200).json(response)
  } catch (err: any) {
    throw new ExceptionError(err)
  }
}
