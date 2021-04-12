/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const AboutPage = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "about.mdx" }) {
        relativePath
        childMdx {
          body
        }
      }
    }
  `)
  return (
    <Layout>
      <Meta title="About" />
      <MDXRenderer>{file.childMdx.body}</MDXRenderer>
    </Layout>
  )
}

export default AboutPage
