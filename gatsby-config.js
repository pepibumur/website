const copyright = "2019 Pedro Piñera"

const language = "en"

module.exports = {
  siteMetadata: {
    siteUrl: `https://ppinera.es`,
    title: `Pedro Piñera`,
    description: `Software Engineer at Shopify where I build tools for Mobile Developers (mostly in Ruby). I'm an open source who likes to share their experiences, learnings and work. When I'm not coding Ruby or Rails, you can find me playing with Swift.`,
    author: `pepibumur`,
    links: {
      github: "https://github.com/pepibumur",
      email: "mailto:pepibumur@gmail.com",
      twitter: "https://twitter.com/pedropbuendia",
      linkedin:
        "https://www.linkedin.com/in/pedro-pi%C3%B1era-buendia-9765a9125/",
      soundcloud: "https://soundcloud.com/ppinera",
      spotify:
        "https://open.spotify.com/user/pepibumur?si=9fYZLPyuQOq368OoWop5rg",
      stackoverflow:
        "https://stackoverflow.com/users/963511/pedro-pi%c3%b1era-buendia",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pedro Piñera`,
        short_name: `Pedro Piñera`,
        start_url: `/`,
        background_color: `#60b2d6`,
        theme_color: `#60b2d6`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "header-anchor",
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: "weirdpattern",
              includeDefaultCss: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-robots-txt`,
  ],
}
