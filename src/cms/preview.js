import React from 'react'
import Layout from '../components/Layout'

const Preview = ({ entry, getAsset }) => (
  <Layout
    background={entry.getIn(['data', 'background'])}
    logo={getAsset(entry.getIn(['data', 'logo']))}
    fontColor={entry.getIn(['data', 'fontColor'])}
    borderRadius={entry.getIn(['data', 'borderRadius'])}
    buttonsColor={entry.getIn(['data', 'buttonsColor'])}
    footerFontColor={entry.getIn(['data', 'footerFontColor'])}
  ></Layout>
)

export default Preview
