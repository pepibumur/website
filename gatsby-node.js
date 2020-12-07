/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent)
    if (fileNode.relativePath.includes("posts")) {
      const filename = createFilePath({ node, getNode, basePath: `posts` })

      const [, date, title] = filename.match(
        /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
      )

      const slug = `/${date.replace(/-/g, "/")}/${title}/`

      createNodeField({ node, name: `type`, value: "blog-post" })
      createNodeField({ node, name: `slug`, value: slug })
      createNodeField({ node, name: `date`, value: date })
    } else {
      const filename = createFilePath({ node, getNode })
      createNodeField({ node, name: `slug`, value: filename })
    }
  } else if (node.sourceInstanceName === "photos") {
    const slug = `/photos/${node.relativeDirectory}`
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const fetchBlogPosts = graphql(
    `
      {
        allMdx(
          filter: { fields: { type: { eq: "blog-post" } } }
          sort: { order: DESC, fields: [fields___date] }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  const createBlogPosts = fetchBlogPosts.then((result) => {
    const posts = result.data.allMdx.edges
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)

    // Create blog lists
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // Create blog posts
    result.data.allMdx.edges.forEach(({ node }, index) => {
      const prev =
        index === 0 ? false : result.data.allMdx.edges[index - 1].node
      const next =
        index === posts.length - 1
          ? false
          : result.data.allMdx.edges[index + 1].node

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/markdown.js`),
        context: {
          slug: node.fields.slug,
          prev,
          next,
        },
      })
    })
  })
  const fetchWiki = graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/wiki/.+\\\\.md/" } }
          sort: { order: DESC, fields: [fields___date] }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  const createWiki = fetchWiki.then((result) => {
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/markdown.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
  return Promise.all([createBlogPosts, createWiki])
}
