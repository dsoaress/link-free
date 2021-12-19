import { prisma } from 'services/prisma'

import type { Data } from 'types/Data'

export async function fetchData(): Promise<Data> {
  const response = await prisma.data.findUnique({
    where: { id: 1 }
  })

  if (!response) {
    throw new Error('No data found')
  }

  return JSON.parse(response.data)
}
