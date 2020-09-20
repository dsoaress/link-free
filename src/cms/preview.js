import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Links from '../components/Links'
import Footer from '../components/Footer'

const Preview = ({ entry, getAsset, widgetFor }) => {
  const links = entry.getIn(['data', 'links'])
  return (
    <Layout background={entry.getIn(['data', 'background'])}>
      <Header logo={getAsset(entry.getIn(['data', 'logo']))} />
      <Links
        links={links.toJS()}
        fontColor={entry.getIn(['data', 'fontColor'])}
        borderRadius={entry.getIn(['data', 'borderRadius'])}
        buttonsColor={entry.getIn(['data', 'buttonsColor'])}
      />
      <Footer footerFontColor={entry.getIn(['data', 'footerFontColor'])} />
    </Layout>
  )
}

export default Preview
