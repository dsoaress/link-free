const siteMetadata = require('./site-metadata.json')

const settings = {
  title: siteMetadata.title,
  shortTitle: siteMetadata.shortTitle,
  description: siteMetadata.description,
  favicon: siteMetadata.favicon,
  lang: siteMetadata.lang,
  gtmID: siteMetadata.gtmID
}

module.exports = settings
