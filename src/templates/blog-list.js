/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import Tags from "../components/shared/tags"
import { Link, graphql } from "gatsby"
import NumberBadge from "../components/shared/number-badge"
import moment from "moment"

const Post = ({ post }) => {
  const dateMoment = moment(post.fields.date, "YYYY-MM-DD")
  const dateMonth = dateMoment.format("MMMM YYYY")
  const dateDay = dateMoment.format("D")

  return (
    <article sx={{ mb: 4 }}>
      <header>
        <Styled.h2 sx={{ mb: 1 }}>
          <Link
            sx={{
              variant: "styles.navlink",
            }}
            to={post.fields.slug}
          >
            {post.frontmatter.title}
          </Link>
        </Styled.h2>
        <div sx={{ display: "flex" }}>
          <NumberBadge number={dateDay} size={[30]} />{" "}
          <b sx={{ ml: 2 }}>{dateMonth}</b>
        </div>
        <Tags tags={post.frontmatter.tags} />
      </header>
      <p>
        {post.frontmatter.excerpt ? post.frontmatter.excerpt : post.excerpt}
      </p>
    </article>
  )
}

const Footer = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${(currentPage + 1).toString()}`

  return (
    <div
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {!isFirst && (
        <div>
          <Link to={prevPage}>Previous page</Link>
        </div>
      )}
      {!isLast && (
        <div>
          <Link to={nextPage}>Next page</Link>
        </div>
      )}
    </div>
  )
}

const BlogList = ({
  pageContext,
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges.map((edge, index) => (
    <Post key={index} post={edge.node} />
  ))
  return (
    <Layout>
      <Meta />
      <Styled.h1>Blog</Styled.h1>
      <Styled.p>
        You can subscribe to my blog{" "}
        <Styled.a href="/feed.xml">RSS feed</Styled.a>.
      </Styled.p>

      {Posts}
      <Footer {...pageContext} />
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fields: { type: { eq: "blog-post" } } }
      sort: { order: DESC, fields: [fields___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            date
            slug
          }
          excerpt
          frontmatter {
            tags
            title
            excerpt
          }
        }
      }
    }
  }
`
