import { compare } from 'bcryptjs'

import { prisma } from 'services/prisma'
import { createSession } from 'utils/createSession'
import { ExceptionError } from 'utils/error'
import { nc } from 'utils/nc'

const handler = nc.post(async (req, res) => {
  const { username, password } = req.body

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

  const { accessToken, refreshToken } = await createSession(user)

  res.status(200).json({ accessToken, refreshToken })
})

export default handler
