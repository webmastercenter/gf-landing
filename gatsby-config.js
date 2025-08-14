/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `GF Refrigeração`,
    description: `Blog de conteúdos sobre tecnologia e desenvolvimento pessoal`,
    siteUrl: `https://blog.academia-ninja.com/`,
    social: {
      Github: `https://github.com/Academia-Ninja`,
      Linkedin: `https://www.linkedin.com/in/ailton-loures`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GF Refrigeração`,
        short_name: `GF`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `static/img/logo.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-GXYZTT4JZP", "GT-MK4T5ZTG"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": `${__dirname}/src/components`,
          "@helpers": `${__dirname}/src/helpers`,
          "@pages": `${__dirname}/src/pages`,
          "@shared": `${__dirname}/src/shared`,
        },
        extensions: ["js"],
      },
    },
  ],
}
