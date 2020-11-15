import React from 'react'
import IndexPageTemplate from '../../templates/index'

const IndexPage = ({ entry, getAsset }) => {
  const links = entry.getIn(['data', 'links'])
  return (
    <IndexPageTemplate
      background={entry.getIn(['data', 'background'])}
      logo={getAsset(entry.getIn(['data', 'logo']))}
      links={links.toJS()}
      buttonsFontColor={entry.getIn(['data', 'buttonsFontColor'])}
      borderRadius={entry.getIn(['data', 'borderRadius'])}
      buttonsColor={entry.getIn(['data', 'buttonsColor'])}
      fontColor={entry.getIn(['data', 'fontColor'])}
    />
  )
}

export default IndexPage
