import React from 'react'
import IndexPageTemplate from '../templates/IndexPageTemplate'

const Preview = ({ entry, getAsset, widgetFor }) => {
  console.log(widgetFor('links'))
  const links = entry.getIn(['data', 'links'])
  return (
    <IndexPageTemplate
      background={entry.getIn(['data', 'background'])}
      logo={getAsset(entry.getIn(['data', 'logo']))}
      links={links.toJS()}
      fontColor={entry.getIn(['data', 'fontColor'])}
      borderRadius={entry.getIn(['data', 'borderRadius'])}
      buttonsColor={entry.getIn(['data', 'buttonsColor'])}
      footerFontColor={entry.getIn(['data', 'footerFontColor'])}
    />
  )
}

export default Preview
