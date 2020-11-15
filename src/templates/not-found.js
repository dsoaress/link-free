import React from 'react'
import Layout from '../components/layout'
import NotFound from '../components/not-found'

export const NotFoundPageTemplate = ({
  background,
  borderRadius,
  buttonsColor,
  buttonsFontColor,
  buttonLabel,
  fontColor,
  header,
  logo,
  message,
  title
}) => (
  <Layout
    background={background}
    fontColor={fontColor}
    logo={logo}
    title={title}
  >
    <NotFound
      borderRadius={borderRadius}
      buttonsColor={buttonsColor}
      buttonLabel={buttonLabel}
      buttonsFontColor={buttonsFontColor}
      fontColor={fontColor}
      header={header}
      message={message}
    />
  </Layout>
)

export default NotFoundPageTemplate
