import type { AppProps } from 'next/app'

import { DataProvider } from '../contexts/DataContext'
import { Layout } from '../styles/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider initialData={pageProps.initialData}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}
