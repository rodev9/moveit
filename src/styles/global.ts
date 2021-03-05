import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle<{ sidebarVisible: boolean }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
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

  a:hover {
    text-decoration: underline;
  }

  ${props =>
    props.sidebarVisible &&
    css`
      #__next {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr auto;
        grid-template-areas: '. .' '. footer';

        @media (max-width: 550px) {
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          grid-template-areas: '.' '.' 'footer';
        }
      }
    `}
`
