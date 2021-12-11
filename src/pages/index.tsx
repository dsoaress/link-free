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
    <div>
      {links.map(link => (
        <>
          <Button color="sky" schema="rounded" outline key={link.href}>
            {link.label}
          </Button>
          <br />
        </>
      ))}
    </div>
  )
}
