import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle<{ sidebarVisible: boolean }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --background: #F2F3F5;
    --gray-line: #DCDDE0;
    --text: #666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-dark2: #414AA3;
    --blue-twitter: #2AA9E0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, #__next {
    height: 100%;
  }

  #__next > div {
    min-height: 100%;
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button, select {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ${props =>
    props.sidebarVisible &&
    css`
      #__next {
        margin-left: calc(48px + 4rem);

        @media (max-width: 550px) {
          margin-left: 0;
          margin-top: calc(48px + 4rem);
        }
      }
    `}
`
