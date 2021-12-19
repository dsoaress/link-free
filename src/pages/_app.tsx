import type { AppProps } from 'next/app'

import { AuthProvider } from '../contexts/AuthContext'
import { DataProvider } from '../contexts/DataContext'
import { Layout } from '../styles/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider initialData={pageProps.initialData}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </DataProvider>
  )
}
