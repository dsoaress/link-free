import type { Data } from '../types/Data'
import { prisma } from './prisma'

export async function fetchData(): Promise<Data> {
  const data = await prisma.data.findFirst()

  if (data) {
    return JSON.parse(data.data)
  } else {
    throw new Error('No data found')
  }
}
