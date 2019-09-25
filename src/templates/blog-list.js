/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import Tags from "../components/shared/tags"
import { Link, graphql } from "gatsby"

const Post = ({ post }) => {
  return (
    <article sx={{ mb: 5 }}>
      <header>
        <h2 sx={{ mb: 1 }}>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h2>
        <div>{post.fields.date}</div>
        <Tags tags={post.frontmatter.tags} />
      </header>
      <p>{post.frontmatter.excerpt}</p>
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
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map((edge, index) => (
    <Post key={index} post={edge.node} />
  ))
  return (
    <Layout>
      <Meta />
      {Posts}
      <Footer {...pageContext} />
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
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
