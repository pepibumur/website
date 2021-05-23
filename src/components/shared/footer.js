/** @jsx jsx */
import { jsx } from "theme-ui"
import BodyMargin from "./body-margin"
import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaSoundcloud as SoundCloud,
  FaSpotify as Spotify,
  FaLinkedin as LinkedIn,
  FaGitlab as GitLab
} from "react-icons/fa"

export default ({
  twitterUrl,
  githubUrl,
  soundcloudUrl,
  spotifyUrl,
  gitlabUrl,
  linkedinUrl,
}) => {
  return (
    <footer sx={{ py: 3 }}>
      <BodyMargin>
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
          }}
        >
          <div sx={{ display: "flex", flexDirection: "row", mb: 3 }}>
            <a
              target="__blank"
              href={twitterUrl}
              title="Twitter"
              sx={{
                variant: "styles.navitem",
                ml: 2,
                mr: 3,
              }}
            >
              <Twitter size={24} />
            </a>
            <a
              target="__blank"
              href={githubUrl}
              title="GitHub"
              sx={{
                ml: 2,
                mr: 3,
                variant: "styles.navitem",
              }}
            >
              <GitHub size={24} />
            </a>
            <a
              target="__blank"
              href={gitlabUrl}
              title="GitHub"
              sx={{
                ml: 2,
                mr: 3,
                variant: "styles.navitem",
              }}
            >
              <GitLab size={24} />
            </a>
            <a
              target="__blank"
              href={soundcloudUrl}
              title="SoundCloud"
              sx={{
                ml: 2,
                mr: 3,
                variant: "styles.navitem",
              }}
            >
              <SoundCloud size={24} />
            </a>
            <a
              target="__blank"
              href={spotifyUrl}
              title="Spotify"
              sx={{
                ml: 2,
                mr: 3,
                variant: "styles.navitem",
              }}
            >
              <Spotify size={24} />
            </a>
            <a
              target="__blank"
              href={linkedinUrl}
              title="LinkedIn"
              sx={{
                variant: "styles.navitem",
              }}
            >
              <LinkedIn size={24} />
            </a>
          </div>
          <small>Copyright © Craftweg, 2021</small>
        </div>
      </BodyMargin>
    </footer>
  )
}
