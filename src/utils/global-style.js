import { createGlobalStyle } from "styled-components"
import theme from "./theme"

export default createGlobalStyle`
  main h1 {
    color: ${theme.colors.secondary};
  }
  h1, h2, h3, h4, h5, h6 {
    a {
      text-decoration: none;
    }
  }

  ::-moz-selection { background: ${theme.colors.hover}; }
  ::selection { background: ${theme.colors.hover} }

  p > a {
    text-decoration: underline;
  }

  /* PRISM */
  code[class*='language-'],
  pre[class*='language-'] {
    flex: 1;
  color: white;
  background: none;
  font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
  font-feature-settings: normal;
  font-size: 15px;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  margin-bottom: 0;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*='language-'] {
  overflow: auto;
  padding: 1.3125rem;
}

pre[class*='language-']::-moz-selection {
  /* Firefox */
  background: hsl(207, 4%, 16%);
}

pre[class*='language-']::selection {
  /* Safari */
  background: hsl(207, 4%, 16%);
}

/* Text Selection colour */
pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: hsla(0, 0%, 100%, 0.15);
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection {
  text-shadow: none;
  background: hsla(0, 0%, 100%, 0.15);
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  border-radius: 0.3em;
  background: #fffbdd;
  color: var(--inlineCode-text);
  padding: 0.15em 0.2em 0.05em;
  white-space: normal;
}

.token.attr-name {
  color: rgb(173, 219, 103);
  font-style: italic;
}

.token.comment {
  color: rgb(128, 147, 147);
}

.token.string,
.token.url {
  color: rgb(173, 219, 103);
}

.token.variable {
  color: rgb(214, 222, 235);
}

.token.number {
  color: rgb(247, 140, 108);
}

.token.builtin,
.token.char,
.token.constant,
.token.function {
  color: rgb(130, 170, 255);
}

.token.punctuation {
  color: rgb(199, 146, 234);
}

.token.selector,
.token.doctype {
  color: rgb(199, 146, 234);
  font-style: 'italic';
}

.token.class-name {
  color: rgb(255, 203, 139);
}

.token.tag,
.token.operator,
.token.keyword {
  color: #ffa7c4;
}

.token.boolean {
  color: rgb(255, 88, 116);
}

.token.property {
  color: rgb(128, 203, 196);
}

.token.namespace {
  color: rgb(178, 204, 214);
}

pre[data-line] {
  padding: 1em 0 1em 3em;
  position: relative;
}

.gatsby-highlight-code-line {
  background-color: hsla(207, 95%, 15%, 1);
  display: block;
  margin-right: -1.3125rem;
  margin-left: -1.3125rem;
  padding-right: 1em;
  padding-left: 1.25em;
  border-left: 0.25em solid #ffa7c4;
}

.gatsby-highlight {
  margin-bottom: 1.75rem;
  margin-left: -1.3125rem;
  margin-right: -1.3125rem;
  border-radius: 10px;
  background: #011627;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
}

@media (max-width: 672px) {
  .gatsby-highlight {
    border-radius: 0;
  }
}

.gatsby-highlight pre[class*='language-'] {
  float: left;
  min-width: 100%;
}
`
