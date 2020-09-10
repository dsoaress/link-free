import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Links = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "links" } }) {
          frontmatter {
            links {
              label
              url
            }
          }
        }
      }
    `
  )

  const links = markdownRemark.frontmatter.links

  return (
    <S.Wrapper>
      {links.map((link, i) => (
        <S.Link href={link.url} key={i}>
          <S.List>{link.label}</S.List>
        </S.Link>
      ))}
    </S.Wrapper>
  )
}

export default Links
