import React from 'react'
import Layout from '../components/layout'
import Links from '../components/links'

const IndexPageTemplate = ({
  background,
  borderRadius,
  buttonsColor,
  buttonsFontColor,
  fontColor,
  links,
  logo,
  title
}) => (
  <Layout
    background={background}
    fontColor={fontColor}
    logo={logo}
    title={title}
  >
    <Links
      borderRadius={borderRadius}
      buttonsColor={buttonsColor}
      buttonsFontColor={buttonsFontColor}
      links={links}
    />
  </Layout>
)

export default IndexPageTemplate
