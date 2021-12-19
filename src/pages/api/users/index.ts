import { hashSync } from 'bcryptjs'

import { prisma } from 'services/prisma'
import { authMiddleware } from 'utils/authMiddleware'
import { ExceptionError } from 'utils/error'
import { nc } from 'utils/nc'

const handler = nc
  .use(authMiddleware)
  .get(async (_req, res) => {
    const response = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        role: true
      }
    })

    if (!response) {
      throw new ExceptionError('No data found')
    }

    res.status(200).json(response)
  })
  .post(async (req, res) => {
    const { username, password, role } = req.body

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
      where: { username }
    })

    if (usernameExists) {
      throw new ExceptionError('Username already exists')
    }

    try {
      const response = await prisma.user.create({
        data: {
          username,
          password: hashSync(password, 10),
          role: role ? role : 'EDITOR'
        }
      })

      res.status(200).json(response)
    } catch (err: any) {
      throw new ExceptionError(err)
    }
  })

export default handler
