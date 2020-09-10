import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'
import * as S from './styled'
import GlobalStyles from './global'

const Layout = ({ children }) => (
  <S.Wrapper>
    <GlobalStyles />
    <Header />
    {children}
    <Footer />
  </S.Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
