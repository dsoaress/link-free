import React from 'react'
import SEO from '../components/seo'
import IndexPageTemplate from '../templates/index'
import * as indexPage from '../settings/index-page.json'
import * as siteMetadata from '../settings/site-metadata.json'

const IndexPage = () => (
  <>
    <SEO />
    <IndexPageTemplate
      background={indexPage.background}
      borderRadius={indexPage.borderRadius}
      buttonsColor={indexPage.buttonsColor}
      buttonsFontColor={indexPage.buttonsFontColor}
      fontColor={indexPage.fontColor}
      links={indexPage.links}
      logo={indexPage.logo}
      title={siteMetadata.title}
    />
  </>
)

export default IndexPage
