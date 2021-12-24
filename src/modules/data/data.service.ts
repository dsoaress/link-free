import { prisma } from 'services/prisma'
import { ExceptionError } from 'utils/error'

export class DataService {
  async getData() {
    const response = await prisma.data.findUnique({
      where: { id: 1 }
    })

    if (!response) {
      throw new ExceptionError('No data found', 404)
    }

    return response.data
  }

  async updateData(data = {}) {
    const response = await prisma.data.update({
      where: { id: 1 },
      data: { data: JSON.stringify(data) }
    })

    if (!response) {
      throw new ExceptionError('No data found', 404)
    }

    return response.data
  }
}
