import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import NotFound from '../components/not-found'
import Footer from '../components/footer'

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
  return (
    <Layout background={styles.background}>
      <SEO />
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
  }
`
