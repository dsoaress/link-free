import { Prisma } from '@prisma/client'
import { compare, hashSync } from 'bcryptjs'
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { prisma } from '../../../services/prisma'
import { ExceptionError } from '../../../utils/error'

interface Request extends NextApiRequest {
  userId: string
  userRole: string
}

const handler = nc<Request, NextApiResponse>({
  onNoMatch: (_req, res) => {
    res.status(404).json({ error: 'Not found' })
  },
  onError: (err, _req, res) => {
    if (err instanceof ExceptionError) {
      res.status(err.status).json({
        status: err.status,
        error: err.message
      })
    } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(400).json({
        status: 400,
        error: err.message
      })
    } else {
      res.status(500).json({
        status: 500,
        error: err.message
      })
    }
  }
})
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
