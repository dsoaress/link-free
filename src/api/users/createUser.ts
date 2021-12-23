import { hashSync } from 'bcryptjs'

import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const { username, password, role } = req.body
  const normalizedUsername = username.toLowerCase().trim()

  if (!username || !password) {
    throw new ExceptionError('Username and password are required')
  }

  if (!['ADMIN', 'EDITOR'].includes(role)) {
    throw new ExceptionError('Role must be either ADMIN or EDITOR')
  }

  if (req.userRole !== 'ADMIN') {
    throw new ExceptionError('Only admins can create users')
  }

  const usernameExists = await prisma.user.findUnique({
    where: { username: normalizedUsername }
  })

  if (usernameExists) {
    throw new ExceptionError('Username already exists')
  }

  try {
    const response = await prisma.user.create({
      data: {
        username: normalizedUsername,
        password: hashSync(password, 10),
        role: role ? role : 'EDITOR'
      },
      select: {
        id: true,
        username: true,
        role: true
      }
    })

    res.status(200).json(response)
  } catch (err: any) {
    throw new ExceptionError(err)
  }
}
