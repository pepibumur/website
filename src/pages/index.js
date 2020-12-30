/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"

const HomePage = () => {
  const projectStyle = { width: ["100%", "30%"] }
  return (
    <Layout>
      <Meta />
      <Styled.h1>Pedro Piñera</Styled.h1>
      <div sx={{ fontWeight: "bold" }}>
        <Styled.p>
          Engineering manager at{" "}
          <a
            href="https://shopify.com"
            target="__blank"
            sx={{
              textDecoration: "none",
              color: "inherit",
              ":hover,:focus": {
                color: "primary",
              },
            }}
          >
            Shopify
          </a>
          . Based in Berlin.
        </Styled.p>
      </div>
      <Styled.h2>Projects</Styled.h2>
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          flexWrap: "wrap",
        }}
      >
        <div sx={projectStyle}>
          <Styled.h3>
            <a
              sx={{ variant: "styles.navlink" }}
              href="https://github.com/tuist/tuist"
            >
              Tuist
            </a>
          </Styled.h3>
          <Styled.p>
            Bootstrap, maintain, and interact with Xcode projects at any scale
          </Styled.p>
        </div>
        <div sx={projectStyle}>
          <Styled.h3>
            <a
              sx={{ variant: "styles.navlink" }}
              href="https://github.com/tuist/xcodeproj"
            >
              XcodeProj
            </a>
          </Styled.h3>
          <Styled.p>
            A Swift library to Read, update, and write Xcode projects,
            workspaces, and schemes.
          </Styled.p>
        </div>
        <div sx={projectStyle}>
          <Styled.h3>
            <a
              sx={{ variant: "styles.navlink" }}
              href="https://tuist.io/docs/architectures/microfeatures/"
            >
              Microfeatures
            </a>
          </Styled.h3>
          <Styled.p>
            An architecture for applications for Apple platforms.
          </Styled.p>
        </div>
      </div>
      <Styled.h2>Prototypes</Styled.h2>
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          flexWrap: "wrap",
        }}
      >
        <div sx={projectStyle}>
          <Styled.h3>
            <a
              sx={{ variant: "styles.navlink" }}
              href="https://github.com/backbonesh/backbone"
            >
              Backbone
            </a>
          </Styled.h3>
          <Styled.p>
            A modern open-source tool to manage distributed organizations.
          </Styled.p>
        </div>
        <div sx={projectStyle}>
          <Styled.h3>
            <a
              sx={{ variant: "styles.navlink" }}
              href="https://github.com/bonsaijs/bonsai"
            >
              BonsaiJS
            </a>
          </Styled.h3>
          <Styled.p>
            A tool for building React Native apps designed for zero-configuration and developer's convenience.
          </Styled.p>
        </div>
      </div>
    
    </Layout>
  )
}

export default HomePage
