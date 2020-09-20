import React from 'react'

import * as S from './styled'
import GlobalStyles from './global'

const Layout = ({ children, background }) => (
  <S.Wrapper>
    <GlobalStyles background={background} />
    {children}
  </S.Wrapper>
)

export default Layout
