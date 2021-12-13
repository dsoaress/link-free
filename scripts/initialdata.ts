import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()

async function initialdata() {
  const dataDir = './data'
  const data = await prisma.data.findFirst()

  if (data) {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir)
    }

    const parsedData = JSON.parse(data.data)
    fs.writeFileSync(`${dataDir}/data.json`, JSON.stringify(parsedData, null, 2))
  } else {
    throw new Error('No data found')
  }
}

initialdata()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
