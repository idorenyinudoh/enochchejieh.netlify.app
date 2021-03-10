/* eslint-disable node/no-path-concat */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config()

console.log(process.env)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Enoch Chejieh',
    description: "Enoch Chejieh's Portfolio Site.",
    author: '@ECJ222'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET
      }
    },
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        once: false // Defines if animation needs to be launched once
      }
    },
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'image',
        prefix: 'images/'
      }
    },
    'gatsby-plugin-sass'
  ]
}
