import React from 'react'
import NotFoundPageTemplate from '../../templates/not-found'
import * as data from '../../settings/index-page.json'

const IndexPage = ({ entry }) => {
  return (
    <NotFoundPageTemplate
      background={data.background}
      borderRadius={data.borderRadius}
      buttonsColor={data.buttonsColor}
      buttonLabel={entry.getIn(['data', 'buttonLabel'])}
      buttonsFontColor={data.buttonsFontColor}
      fontColor={data.fontColor}
      logo={data.logo}
      message={entry.getIn(['data', 'message'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

export default IndexPage
