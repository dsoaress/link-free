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
  logo,
  message,
  title
}) => (
  <Layout background={background} fontColor={fontColor} logo={logo}>
    <NotFound
      borderRadius={borderRadius}
      buttonsColor={buttonsColor}
      buttonLabel={buttonLabel}
      buttonsFontColor={buttonsFontColor}
      fontColor={fontColor}
      message={message}
      title={title}
    />
  </Layout>
)

export default NotFoundPageTemplate
