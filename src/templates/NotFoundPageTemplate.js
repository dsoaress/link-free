import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import NotFound from '../components/NotFound'
import Footer from '../components/Footer'

export const NotFoundPageTemplate = ({
  background,
  logo,
  title,
  message,
  buttonLabel,
  fontColor
}) => (
  <Layout background={background}>
    <Header logo={logo} />
    <NotFound title={title} message={message} buttonLabel={buttonLabel} />
    <Footer fontColor={fontColor} />
  </Layout>
)

const NotFoundPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter
  const styles = data.styles.frontmatter
  const lang = data.site.siteMetadata.lang
  return (
    <Layout background={styles.background}>
      <SEO lang={lang} />
      <Header logo={styles.logo.publicURL} />
      <NotFound
        title={content.title}
        message={content.message}
        buttonLabel={content.buttonLabel}
        buttonsFontColor={styles.buttonsFontColor}
        borderRadius={styles.borderRadius}
        buttonsColor={styles.buttonsColor}
        fontColor={styles.fontColor}
      />
      <Footer fontColor={styles.fontColor} />
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        message
        buttonLabel
      }
    }
    styles: markdownRemark(fields: { slug: { eq: "/" } }) {
      frontmatter {
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
