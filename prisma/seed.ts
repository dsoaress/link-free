import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcryptjs'
import dotenv from 'dotenv'

const prisma = new PrismaClient()

dotenv.config({
  path: './.env'
})

async function main() {
  const data = {
    settings: {
      avatar: '/avatar.jpeg',
      name: 'John Doe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam consectetur, nisl nunc aliquet nunc, euismod aliquam nunc nisl euismod.',
      font: 'baloo',
      buttonsSchema: 'rounded',
      outline: true,
      colors: {
        texts: 'neutral50',
        socialLinks: 'rose',
        buttonLinks: 'rose',
        background: 'neutral700'
      }
    },
    socialLinks: [
      {
        label: 'Email',
        href: '1'
      },
      {
        label: 'GitHub',
        href: '2'
      },
      {
        label: 'LinkedIn',
        href: '3'
      },
      {
        label: 'Dev',
        href: '4'
      },
      {
        label: 'Instagram',
        href: '5'
      },
      {
        label: 'WhatsApp',
        href: '6'
      }
    ],
    buttonLinks: [
      {
        label: 'Home',
        href: '#'
      },
      {
        label: 'About',
        href: '/about'
      },
      {
        label: 'Contact',
        href: '/contact'
      }
    ]
  }

  const hasData = await prisma.data.findUnique({
    where: { id: 1 }
  })

  if (!hasData) {
    console.log(`Start seeding...`)

    await prisma.data.create({
      data: {
        id: 1,
        data: JSON.stringify(data)
      }
    })
  }

  const hasUser = await prisma.user.findFirst()

  if (!hasUser) {
    console.log(`Start seeding user...`)

    const { USERNAME, PASSWORD } = process.env

    if (!USERNAME || !PASSWORD) {
      throw new Error('USERNAME and PASSWORD env variables are required')
    }

    await prisma.user.create({
      data: {
        username: USERNAME,
        password: hashSync(PASSWORD, 10),
        role: 'ADMIN'
      }
    })
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
