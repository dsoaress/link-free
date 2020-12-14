const fs = require('fs')
const yaml = require('js-yaml')
const metadata = yaml.safeLoad(
  fs.readFileSync('./content/metadata.yaml', 'utf8')
)

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
