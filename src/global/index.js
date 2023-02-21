import { createGlobalStyle } from "styled-components";

import Mulish from "../assets/Mulish-300.ttf";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Mulish";
        src:  url(${Mulish});
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: "Mulish", "Poppins", sans-serif;
    }
    body{
        background-color: #1e1e1e;
        width: 100%;
        min-height: 100vh;
    }

    a{
        text-decoration: none;
    }
    h1, h2, h3, h4, h5, h6 {
    font-family: "Mulish", "Poppins", sans-serif;
  }

  h1 {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 10px;
  }

`;

export default GlobalStyle;
