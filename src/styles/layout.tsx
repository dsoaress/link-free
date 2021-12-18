import { ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'

import { useData } from '../hooks/useData'
import { Data } from '../types/Data'

type GlobalStyleProps = {
  data: Data
}

type LayoutProps = {
  children: ReactNode
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.25s ease;
  }

  body {
    font-family: "Roboto", sans-serif;
    color: #0f172a;
    background: ${({ data }) => data.settings.colors.background};
  }
`

export function Layout({ children }: LayoutProps) {
  const { data } = useData()

  return (
    <>
      <GlobalStyles data={data} />
      {children}
    </>
  )
}
