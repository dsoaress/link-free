import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark {
          frontmatter {
            links {
              label
              url
            }
            borderRadius
            buttonsColor
            fontColor
            footerFontColor
            background
            logo {
              publicURL
            }
          }
        }
      }
    `
  )

  const content = markdownRemark.frontmatter

  return (
    <Layout
      background={content.background}
      logo={content.logo.publicURL}
      links={content.links}
      fontColor={content.fontColor}
      borderRadius={content.borderRadius}
      buttonsColor={content.buttonsColor}
      footerFontColor={content.footerFontColor}
    >
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
