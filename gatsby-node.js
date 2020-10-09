/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField, createRedirect } = actions
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
      createRedirect({
        fromPath: slug,
        toPath: `https://craftweg.com/${title}`,
        force: true,
        isPermanent: true
      })
    } else {
      const filename = createFilePath({ node, getNode })
      createNodeField({ node, name: `slug`, value: filename })
    }
  } else if (node.sourceInstanceName === "photos") {
    const slug = `/photos/${node.relativeDirectory}`
    createNodeField({ node, name: `slug`, value: slug })
  }
}