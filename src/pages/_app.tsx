import { Layout } from 'components/Layout'
import { AuthProvider } from 'contexts/AuthContext'
import { DataProvider } from 'contexts/DataContext'

import type { AppProps } from 'next/app'

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
