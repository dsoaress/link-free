const settings = require('./src/settings/siteMetadata')

module.exports = {
  siteMetadata: {
    title: settings.title,
    description: settings.description,
    lang: settings.lang
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: settings.title,
        short_name: settings.shortTitle,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `fullscreen`,
        icon: `src/settings/${settings.favicon}`,
        icon_options: {
          purpose: `maskable`
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: settings.gtmID,
        includeInDevelopment: true,
        defaultDataLayer: { platform: `gatsby` }
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        htmlFavicon: `src/settings/${settings.favicon}`,
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    }
  ]
}
