/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Meta from "../components/shared/meta"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment"
import NumberBadge from "../components/shared/number-badge"

const Footer = ({ pageContext }) => {
  const prev = pageContext.prev
  const next = pageContext.next

  return (
    <div
      sx={{
        display: "flex",
        flex: 1,
        my: 5,
        alignItems: ["center", "center", "center"],
        flexDirection: ["column", "column", "row"],
        justifyContent: "space-between",
      }}
    >
      {prev && (
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <b>Previous: </b>
          <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
        </div>
      )}
      {next && (
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <b>Next: </b>
          <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
        </div>
      )}
    </div>
  )
}

export default ({ data, pageContext }) => {
  const entity = data.mdx
  const title = entity.frontmatter.title
  let dateMonth
  let dateDay
  if (entity.fields.date) {
    const dateMoment = moment(entity.fields.date, "YYYY-MM-DD")
    dateMonth = dateMoment.format("MMMM YYYY")
    dateDay = dateMoment.format("D")
  }

  return (
    <Layout>
      <Meta
        title={title}
        keywords={entity.frontmatter.tags}
        description={
          entity.frontmatter.excerpt
            ? entity.frontmatter.excerpt
            : entity.excerpt
        }
      />
      <article>
        <Styled.h1>{title}</Styled.h1>
        {dateDay && dateMonth && (
          <div sx={{ display: "flex", fontSize: 4, mb: 3 }}>
            <NumberBadge number={dateDay} size={[40]} />{" "}
            <b sx={{ ml: 2 }}>{dateMonth}</b>
          </div>
        )}
        <MDXRenderer>{entity.body}</MDXRenderer>
      </article>
      <Footer pageContext={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        date
      }
      body
      excerpt
      frontmatter {
        title
        tags
        excerpt
      }
    }
  }
`
