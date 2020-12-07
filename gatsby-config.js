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
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.excerpt
                    ? edge.node.frontmatter.excerpt
                    : edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                  copyright: copyright,
                  language: language,
                  site_url: site.siteMetadata.siteUrl,
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  filter: { fields: { type: { eq: "blog-post" } } },
                  sort: { order: DESC, fields: [fields___date] }
                ) {
                  edges {
                    node {
                      html
                      body
                      fields {
                        slug
                        date
                      }
                      excerpt
                      frontmatter {
                        title
                        excerpt
                      }
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "Pedro Piñera's Blog RSS Feed",
          },
        ],
      },
    },
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
