import data from '../../temp/data.json'
import { globalCss, theme } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: theme.fonts[data.settings.font as keyof typeof theme.fonts]
  }
})
