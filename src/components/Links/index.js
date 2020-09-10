import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Links = () => {
  const data = useStaticQuery(
    graphql`
      query {
        links: markdownRemark(frontmatter: { key: { eq: "links" } }) {
          frontmatter {
            links {
              label
              url
            }
          }
        }
        styles: markdownRemark(frontmatter: { key: { eq: "styles" } }) {
          frontmatter {
            borderRadius
            buttonsColor
            fontColor
          }
        }
      }
    `
  )

  const links = data.links.frontmatter.links
  const styles = data.styles.frontmatter

  return (
    <S.Wrapper>
      {links.map((link, i) => (
        <S.Link fontColor={styles.fontColor} href={link.url} key={i}>
          <S.List
            borderRadius={styles.borderRadius}
            buttonsColor={styles.buttonsColor}
          >
            {link.label}
          </S.List>
        </S.Link>
      ))}
    </S.Wrapper>
  )
}

export default Links
