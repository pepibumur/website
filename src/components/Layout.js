/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import BodyMargin from "./shared/body-margin"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./shared/header"
import Footer from "./shared/footer"
import GlobalStyle from "../utils/global-style"
import { MDXProvider } from "@mdx-js/react"
import Youtube from "./mdx/youtube"

import "focus-visible"

const Layout = ({ children, withMargin = true }) => {
  const {
    site: {
      siteMetadata: {
        title,
        links: { twitter, github, soundcloud, spotify, linkedin },
      },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          links {
            twitter
            github
            soundcloud
            spotify
            linkedin
          }
        }
      }
    }
  `)

  let main
  if (withMargin) {
    main = (
      <BodyMargin>
        <main sx={{ py: [1, 5] }}>{children}</main>
      </BodyMargin>
    )
  } else {
    main = <main sx={{ py: [1, 5] }}>{children}</main>
  }

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={title} />
      <MDXProvider components={{ youtube: Youtube }}>{main}</MDXProvider>
      <Footer
        twitterUrl={twitter}
        githubUrl={github}
        soundcloudUrl={soundcloud}
        spotifyUrl={spotify}
        linkedinUrl={linkedin}
      />
    </>
  )
}

export default Layout
