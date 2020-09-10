import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import GlobalStyles from './global'

const Layout = ({ children }) => (
  <S.Wrapper>
    <GlobalStyles />
    {children}
  </S.Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
