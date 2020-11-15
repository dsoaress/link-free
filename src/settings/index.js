const siteMetadata = require('./site-metadata.json')
const indexPage = require('./index-page.json')

const settings = {
  title: siteMetadata.title,
  shortTitle: siteMetadata.shortTitle,
  description: siteMetadata.description,
  favicon: siteMetadata.favicon,
  lang: siteMetadata.lang,
  background: indexPage.background,
  themeColor: indexPage.buttonsColor,
  gtmID: siteMetadata.gtmID
}

module.exports = settings
