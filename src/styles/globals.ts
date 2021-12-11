import { fonts, globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  'body, button, a': {
    fontFamily: fonts['baloo'].name,
    fontWeight: 500
  }
})
