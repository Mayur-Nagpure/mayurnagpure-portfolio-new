import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: #181a20;
    background-image: 
      radial-gradient(circle at 10% 80%, rgba(56,189,248,0.18) 0%, rgba(24,26,32,0) 55%),
      radial-gradient(circle at 90% 10%, rgba(56,189,248,0.18) 0%, rgba(24,26,32,0) 55%);
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;
