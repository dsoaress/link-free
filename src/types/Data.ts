import type { ButtonVariantProps } from '../components/Button'
import type { LinkVariantProps } from '../components/Link'
import type { Colors, Fonts } from '../styles/stitches.config'

export type Data = {
  settings: {
    avatar: string
    name: string
    description: string
    font: Fonts
    buttonsSchema: ButtonVariantProps['schema']
    outline: ButtonVariantProps['outline']
    colors: {
      texts: Colors
      socialLinks: LinkVariantProps['theme']
      buttonLinks: ButtonVariantProps['theme']
      background: Colors
    }
  }
  socialLinks: {
    label: string
    href: string
  }[]
  buttonLinks: {
    label: string
    href: string
  }[]
}
