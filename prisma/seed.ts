import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

  const hasData = await prisma.data.findFirst()

  if (!hasData) {
    console.log(`Start seeding...`)

    await prisma.data.create({
      data: { data: JSON.stringify(data) }
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
