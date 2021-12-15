import type { ButtonVariantProps } from '../components/Button'
import type { LinkVariantProps } from '../components/Link'
import type { Colors, Fonts } from '../styles/stitches.config'

export type Data = {
  settings: {
    avatar: string
    name: string
    description: string
    font: Fonts
    buttonsSchema: ButtonVariantProps['styleSchema']
    outline: boolean
    colors: {
      texts: Colors
      socialLinks: LinkVariantProps['theme']
      buttonLinks: ButtonVariantProps['colorSchema']
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
