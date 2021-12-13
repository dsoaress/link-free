import type { AppProps } from 'next/app'

import { DataProvider } from '../contexts/DataContext'
import { globalStyles } from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}
