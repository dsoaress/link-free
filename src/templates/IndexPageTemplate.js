import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Links from '../components/Links'
import Footer from '../components/Footer'

export const IndexPageTemplate = ({
  background,
  logo,
  links,
  buttonsFontColor,
  borderRadius,
  buttonsColor,
  fontColor
}) => (
  <Layout background={background}>
    <Header logo={logo} />
    <Links
      links={links}
      buttonsFontColor={buttonsFontColor}
      borderRadius={borderRadius}
      buttonsColor={buttonsColor}
    />
    <Footer fontColor={fontColor} />
  </Layout>
)

const IndexPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter
  const lang = data.site.siteMetadata.lang
  return (
    <Layout background={content.background}>
      <SEO lang={lang} />
      <Header logo={content.logo.publicURL} />
      <Links
        links={content.links}
        buttonsFontColor={content.buttonsFontColor}
        borderRadius={content.borderRadius}
        buttonsColor={content.buttonsColor}
      />
      <Footer fontColor={content.fontColor} />
    </Layout>
  )
}

export default IndexPage

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
        buttonsFontColor
        fontColor
        background
        logo {
          publicURL
        }
      }
    }
    site {
      siteMetadata {
        lang
      }
    }
  }
`
