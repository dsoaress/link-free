import React from 'react'
import NotFoundPageTemplate from '../../templates/not-found'
import * as indexPage from '../../settings/index-page.json'
import * as siteMetadata from '../../settings/site-metadata.json'

const NotFoundPage = ({ entry }) => {
  return (
    <NotFoundPageTemplate
      background={indexPage.background}
      borderRadius={indexPage.borderRadius}
      buttonsColor={indexPage.buttonsColor}
      buttonLabel={entry.getIn(['data', 'buttonLabel'])}
      buttonsFontColor={indexPage.buttonsFontColor}
      fontColor={indexPage.fontColor}
      header={entry.getIn(['data', 'title'])}
      logo={'/' + indexPage.logo}
      message={entry.getIn(['data', 'message'])}
      title={siteMetadata.title}
    />
  )
}

export default NotFoundPage
