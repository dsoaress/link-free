export type Data = {
  settings: {
    avatar: string
    name: string
    description: string
    font: string
    buttonBorderRadius: string
    colors: {
      texts: string
      icons: string
      background: string
      buttonLabelColor: string
      buttonBackgroundColor: string
      buttonBorderColor: string
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
