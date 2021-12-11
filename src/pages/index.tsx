import { Avatar } from '../components/Avatar'
import { Button } from '../components/Button'

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
      {links.map(link => (
        <Button color="sky" schema="rounded" outline key={link.href}>
          {link.label}
        </Button>
      ))}
    </div>
  )
}
