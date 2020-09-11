import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Header = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "styles" } }) {
          frontmatter {
            logo {
              publicURL
            }
          }
        }
      }
    `
  )

  const logo = markdownRemark.frontmatter.logo.publicURL

  return <S.Header>{logo && <S.Image src={logo} />}</S.Header>
}

export default Header
