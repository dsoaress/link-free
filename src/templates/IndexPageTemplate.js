import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Links from '../components/Links'
import Footer from '../components/Footer'

const IndexPageTemplate = ({ data }) => {
  const content = data.markdownRemark.frontmatter
  const lang = data.site.siteMetadata.lang
  return (
    <Layout background={content.background}>
      <SEO lang={lang} />
      <Header logo={content.logo.publicURL} />
      <Links
        links={content.links}
        fontColor={content.fontColor}
        borderRadius={content.borderRadius}
        buttonsColor={content.buttonsColor}
      />
      <Footer footerFontColor={content.footerFontColor} />
    </Layout>
  )
}

export default IndexPageTemplate

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
    site {
      siteMetadata {
        title
        description
        lang
      }
    }
  }
`
