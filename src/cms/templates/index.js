import React from 'react'
import IndexPageTemplate from '../../templates/index'
import * as siteMetadata from '../../settings/site-metadata.json'

const IndexPage = ({ entry, getAsset }) => {
  const links = entry.getIn(['data', 'links'])
  return (
    <IndexPageTemplate
      background={entry.getIn(['data', 'background'])}
      borderRadius={entry.getIn(['data', 'borderRadius'])}
      buttonsColor={entry.getIn(['data', 'buttonsColor'])}
      buttonsFontColor={entry.getIn(['data', 'buttonsFontColor'])}
      fontColor={entry.getIn(['data', 'fontColor'])}
      links={links.toJS()}
      logo={getAsset(entry.getIn(['data', 'logo']))}
      title={siteMetadata.title}
    />
  )
}

export default IndexPage
