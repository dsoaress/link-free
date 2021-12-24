import { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'

import { Layout } from 'components/Layout'
import { AuthProvider } from 'contexts/AuthContext'
import { DataProvider } from 'contexts/DataContext'
import { I18nProvider } from 'contexts/I18nContext'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataProvider initialData={pageProps.initialData}>
        <AuthProvider>
          <I18nProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </I18nProvider>
        </AuthProvider>
      </DataProvider>
      <Toaster toastOptions={{ duration: 5000, position: 'top-right' }} />
      {Modal.setAppElement('#__next')}
    </>
  )
}
