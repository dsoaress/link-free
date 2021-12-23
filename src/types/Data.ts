import type { Fonts } from './Fonts'
import type { SocialLinks } from './SocialLinks'

export type Data = {
  settings: {
    avatar: string
    name: string
    description: string
    font: Fonts
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
  socialLinks: SocialLinks
  buttonLinks: {
    id: string
    label: string
    href: string
  }[]
}
