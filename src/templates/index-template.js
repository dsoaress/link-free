import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'

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
  return (
    <Layout background={content.background}>
      <SEO />
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
  }
`
