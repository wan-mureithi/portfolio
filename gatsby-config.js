/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Personal Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};