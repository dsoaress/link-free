import React from 'react'

import Header from '../Header'
import Links from '../Links'
import Footer from '../Footer'
import * as S from './styled'
import GlobalStyles from './global'

const Layout = ({
  background,
  logo,
  links,
  fontColor,
  borderRadius,
  buttonsColor,
  footerFontColor
}) => (
  <S.Wrapper>
    <GlobalStyles background={background} />
    <Header logo={logo} />
    <Links
      links={links}
      fontColor={fontColor}
      borderRadius={borderRadius}
      buttonsColor={buttonsColor}
    />
    <Footer footerFontColor={footerFontColor} />
  </S.Wrapper>
)

export default Layout
