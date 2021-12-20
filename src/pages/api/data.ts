import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'
import { nc } from 'utils/nc'
import { authMiddleware } from 'utils/authMiddleware'

const handler = nc
  .get(async (_req, res) => {
    const response = await prisma.data.findUnique({
      where: { id: 1 }
    })

    if (!response) {
      throw new ExceptionError('No data found')
    }

    res.status(200).json(response?.data)
  })
  .use(authMiddleware)
  .put(async (req, res) => {
    const { data } = req.body

    if (!data) {
      throw new ExceptionError('No data provided')
    }

    try {
      const response = await prisma.data.update({
        where: { id: 1 },
        data: { data: JSON.stringify(req.body.data) }
      })

      res.status(200).json(response)
    } catch (err: any) {
      throw new ExceptionError(err)
    }
  })

export default handler
