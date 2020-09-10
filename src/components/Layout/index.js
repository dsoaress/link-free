import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'
import * as S from './styled'
import GlobalStyles from './global'

const Layout = ({ children }) => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "styles" } }) {
          frontmatter {
            background
          }
        }
      }
    `
  )

  const background = markdownRemark.frontmatter.background

  return (
    <S.Wrapper>
      <GlobalStyles background={background} />
      <Header />
      {children}
      <Footer />
    </S.Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
