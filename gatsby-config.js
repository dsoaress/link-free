const fs = require(`fs`);
const metadataFile = `./content/metadata.json`;
const metadata = fs.existsSync(metadataFile) ? require(metadataFile) : "";

module.exports = {
  plugins: [
    {
      resolve: `@marscollective/gatsby-theme-link-free`,
      options: {
        metadata,
      },
    },
  ],
};
