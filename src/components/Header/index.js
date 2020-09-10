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
                fluid(maxWidth: 256) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  const logo = markdownRemark.frontmatter.logo.childImageSharp.fluid

  return <S.Header>{logo && <Img fluid={logo} />}</S.Header>
}

export default Header
