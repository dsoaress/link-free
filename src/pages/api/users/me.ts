import { prisma } from 'services/prisma'
import { authMiddleware } from 'utils/authMiddleware'
import { ExceptionError } from 'utils/error'
import { nc } from 'utils/nc'

const handler = nc.use(authMiddleware).get(async (req, res) => {
  const { userId } = req
  const response = await prisma.user.findUnique({
    where: { id: +userId },
    select: {
      id: true,
      username: true,
      role: true
    }
  })

  if (!response) {
    throw new ExceptionError('User not found')
  }

  res.status(200).json(response)
})

export default handler
