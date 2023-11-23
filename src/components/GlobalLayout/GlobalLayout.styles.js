import styled, { css } from "styled-components";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    overflow-x: hidden;
    max-width: 100vw;
    color: var(--black);
    background-color: var(--lotion);
    font-family: ${roboto.style.fontFamily};
  }


  h1,h2,h3,h4,h5,h6 {
    font-family: ${roboto.style.fontFamily};
    color: var(--black);
    margin-bottom: 10px;
    font-weight: 500;
  }

  a { 
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  p {
    color: var(--dark-silver);
    font-family: ${roboto.style.fontFamily};
    font-size: 18px;
    font-weight: 500;
  }
  input {
      border: none;
      font-family: ${roboto.style.fontFamily};

      &:focus {
        outline: none;
      }
      &::placeholder {
        font-family: ${roboto.style.fontFamily};
      }
  }

  textarea {
    font-family: ${roboto.style.fontFamily};

    &::placeholder {
       font-family: ${roboto.style.fontFamily};
       font-size: 30px
      }
  }

  button {
      border: none;
  }
  

  :root {
    --black: #000;
    --water-spirit: #61a5d4;
    --white: #fff;
    --dark-silver: #717171;
    --lotion: #FBFBFB;
    --chinese-silver: #C9C9C9;
    --alto: #E0E0E0;
    --green-light: #d1ffd1;
    --red-light: #ef6850;


    --philippine-gray: #8d8d8d;
    --cod-gray: #1E1E1E;
    --dove-gray: #616161;
    --cursed-black: #131313;
  }
`;

export const Wrapper = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;
});

export const Main = styled.main((props) => {
  const { mediaQueries } = props.theme;
  return css`
    margin-top: 10px;
    margin-bottom: 50px;

    ${mediaQueries.lg} {
      margin-top: 20px;
    }
    ${mediaQueries.xl} {
      margin-top: 40px;
    }
  `;
});
