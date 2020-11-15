import React from 'react'
import SEO from '../components/seo'
import IndexPageTemplate from '../templates/index'
import * as data from '../settings/index-page.json'

const IndexPage = () => (
  <>
    <SEO />
    <IndexPageTemplate
      background={data.background}
      borderRadius={data.borderRadius}
      buttonsColor={data.buttonsColor}
      buttonsFontColor={data.buttonsFontColor}
      fontColor={data.fontColor}
      links={data.links}
      logo={data.logo}
    />
  </>
)

export default IndexPage
