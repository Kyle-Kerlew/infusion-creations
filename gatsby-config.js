module.exports = {
  siteMetadata: {
    title: `Wordpress + React Tutorial`,
    description: `Using WordPress as CMS with React`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://createinfusions.local/graphql`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
  ],
}
