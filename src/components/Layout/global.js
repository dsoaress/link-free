import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: sans-serif;
    text-align: center;
    max-width: 60rem;
    height: 100vh;
    margin: auto;
    padding: 3rem 1rem;
    background: ${props => props.background};
  }
`

export default GlobalStyles
