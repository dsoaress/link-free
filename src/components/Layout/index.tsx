import Head from 'next/head'

import { fonts } from 'constants/fonts'
import { useData } from 'hooks/useData'
import { Global } from 'styles/global'

import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { data } = useData()

  return (
    <>
      <Global data={data} />
      <Head>
        <link href={fonts[data.settings.font].url} rel="stylesheet" />
      </Head>
      {children}
    </>
  )
}
