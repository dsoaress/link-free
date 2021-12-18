export type Data = {
  settings: {
    avatar: string
    name: string
    description: string
    font: string
    buttonsSchema: 'square' | 'rounded' | 'pill'
    outline: boolean
    colors: {
      texts: string
      socialLinks: string
      buttonLinks: string
      background: string
    }
  }
  socialLinks: {
    label: string
    href: string
  }[]
  buttonLinks: {
    id: string
    label: string
    href: string
  }[]
}
