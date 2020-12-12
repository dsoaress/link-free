const metadata = require(`./content/metadata.json`)
module.exports = {
  plugins: [
    {
      resolve: `@marscollective/gatsby-theme-link-free`,
      options: {
        metadata
      }
    }
  ]
}
