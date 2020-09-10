import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Footer = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "styles" } }) {
          frontmatter {
            footerFontColor
          }
        }
      }
    `
  )

  const styles = markdownRemark.frontmatter.footerFontColor

  return (
    <S.Wrapper footerFontColor={styles}>
      <p>2020 © Mars Collective</p>
    </S.Wrapper>
  )
}

export default Footer
