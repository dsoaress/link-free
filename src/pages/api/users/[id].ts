import { compare, hashSync } from 'bcryptjs'

import { nc } from 'utils/nc'
import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

const handler = nc
  .get(async (req, res) => {
    const { id } = req.query

    if (!id) {
      throw new ExceptionError('No id provided')
    }

    const response = await prisma.user.findUnique({
      where: { id: +id },
      select: {
        id: true,
        username: true,
        role: true
      }
    })

    if (!response) {
      throw new ExceptionError('No data found', 404)
    }

    res.status(200).json(response)
  })
  .patch(async (req, res) => {
    const { id } = req.query
    const { username, password, newPassword, role } = req.body
    const user = await prisma.user.findUnique({
      where: { id: +id }
    })

    let updatedUser = {}

    if (!user) {
      throw new ExceptionError('No user found', 404)
    }

    if (!id) {
      throw new ExceptionError('No id provided')
    }

    if (req.userRole !== 'ADMIN' && req.userId !== id) {
      throw new ExceptionError('Only admins can update other users')
    }

    if (username) {
      const usernameExists = await prisma.user.findUnique({
        where: { username }
      })

      if (usernameExists && usernameExists.id !== +id) {
        throw new ExceptionError('Username already exists')
      }

      updatedUser = { ...updatedUser, username }
    }

    if (password && newPassword) {
      const isValidPassword = await compare(password, user.password)

      if (!isValidPassword) {
        throw new ExceptionError('Password does not match')
      }

      updatedUser = { password: hashSync(newPassword, 10) }
    }

    if (role) {
      if (!['ADMIN', 'EDITOR'].includes(role)) {
        throw new ExceptionError('Role must be either ADMIN or EDITOR')
      }

      if (user.role === 'ADMIN' && role === 'EDITOR') {
        throw new ExceptionError('Cannot downgrade admin role', 403)
      }

      if (user.role === 'EDITOR') {
        throw new ExceptionError('Cannot change role', 403)
      }

      updatedUser = { ...updatedUser, role }
    }

    try {
      const response = await prisma.data.update({
        where: { id: +id },
        data: { ...updatedUser }
      })

      res.status(200).json(response)
    } catch (err: any) {
      throw new ExceptionError(err)
    }
  })
  .delete(async (req, res) => {
    const { id } = req.query

    if (!id) {
      throw new ExceptionError('No id provided')
    }

    if (id === '1') {
      throw new ExceptionError('Cannot delete admin', 403)
    }

    if (req.userRole !== 'ADMIN' && req.userId !== id) {
      throw new ExceptionError('Only admins can delete other users')
    }

    try {
      await prisma.data.delete({
        where: { id: +id }
      })

      res.status(204).end()
    } catch (err: any) {
      throw new ExceptionError(err)
    }
  })

export default handler
