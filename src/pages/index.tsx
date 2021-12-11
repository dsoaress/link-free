import { Avatar } from '../components/Avatar'
import { Button } from '../components/Button'
import { SocialLinks } from '../components/SocialLinks'

export default function Home() {
  const links = [
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

  const socialLinks = [
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
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        gap: '1rem'
      }}
    >
      <Avatar src="/avatar.jpeg" />
      <SocialLinks socialLinks={socialLinks} color="rose" />
      {links.map(link => (
        <Button color="sky" schema="rounded" outline key={link.href}>
          {link.label}
        </Button>
      ))}
    </div>
  )
}
