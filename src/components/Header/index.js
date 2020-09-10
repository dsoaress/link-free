import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Header = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "styles" } }) {
          frontmatter {
            logo {
              childImageSharp {
                fluid(maxWidth: 256, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <S.Header>
      <Img fluid={markdownRemark.frontmatter.logo.childImageSharp.fluid} />
    </S.Header>
  )
}

export default Header
