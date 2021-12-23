import { en } from './en'

const i18n = {
  en
}

const i18nOptions = [
  {
    label: 'English',
    value: 'en'
  }
]

type I18nProps = typeof en
type I18nOptions = keyof typeof i18n

export { i18n, i18nOptions }
export type { I18nProps, I18nOptions }
