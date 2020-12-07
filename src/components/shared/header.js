/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Link } from "gatsby"
import BodyMargin from "../shared/body-margin.jsx"
import Avatar from "../shared/avatar"

const ColorButton = ({ mode, ...props }) => (
  <button
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: "inline-block",
      appearance: "none",
      bg: "transparent",
      color: "inherit",
      p: 1,
      m: [2, 0],
      border: 0,
      borderRadius: 9999,
      ":hover,:focus": {
        color: "primary",
        boxShadow: "0 0 0 3px",
        outline: "none",
      },
    }}
  >
    <svg
      viewBox="0 0 32 32"
      width="24"
      height="24"
      fill="currentcolor"
      sx={{
        display: "block",
      }}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>
)

const SectionButton = ({ title, url, path, index }) => {
  let button = (
    <div
      sx={{
        userSelect: "none",
        px: 3,
        py: 1,
      }}
    >
      {title}
    </div>
  )
  const linkSx = {
    variant: "styles.navitem",
    fontSize: 0,
  }
  if (url) {
    return (
      <a href={url} target="__blank" sx={linkSx}>
        {button}
      </a>
    )
  } else {
    return (
      <Link to={path} sx={linkSx}>
        {button}
      </Link>
    )
  }
}

const modes = ["light", "black", "dark", "deep", "hack", "pink"]

const Sections = () => {
  const [mode, setMode] = useColorMode()
  const cycleMode = (e) => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    setMode(modes[n])
  }
  return (
    <div
      sx={{
        mt: 3,
        display: "flex",
        flexWrap: "no-wrap",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: ["column", "column", "column", "row"],
      }}
    >
      <Avatar />
      <SectionButton title="Pedro Piñera" path="/" index={0} />
      <SectionButton title="Blog" path="/blog" index={1} />
      <SectionButton title="About" path="/about" index={1} />
      <div sx={{ mx: "auto" }} />
      <ColorButton mode={mode} onClick={cycleMode} />
    </div>
  )
}

const Header = () => {
  return (
    <header>
      <BodyMargin>
        <div
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Sections />
        </div>
      </BodyMargin>
    </header>
  )
}

export default Header
