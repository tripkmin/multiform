import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { size, theme } from './constants';

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
      text-decoration: none;
      color: inherit;
    }
    *{
      box-sizing: border-box;
      font-family: 'ubuntu', sans-serif;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, input, textarea{
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 16px;
      font-family: 'ubuntu';
      vertical-align: baseline;
    }
    span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, input, textarea{
      transform: rotate(0.03deg);
      // for anti-aliasing
    }
    body{
      min-height: 100vh;
    }
    ol, ul{
      list-style: none;
    }
    button {
      font-size: 16px;
      border: 0;
      background: transparent;
      cursor: pointer;
    }
    p, span, textarea, label {
        line-height: 150%;
    }
    strong {
      font-weight: 700;
    }
    h1 {
      font-size: 3rem;
      font-weight: 700;
    }
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
    }
    h3 {
      font-size: 2rem;
      font-weight: 500;
    }
    h4 {
        font-size: 1.5rem;
        font-weight: 500;
    }
    h5 {
      font-size: 1rem;
      font-weight: 500;
    }
    h6 {
      font-size: 0.8rem;
      font-weight: 500;
    }

    // Hide the button that appears when the input type is numeric 
    // for Chrome, Safari, Edge, Opera
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    // for Firefox
    input[type=number] {
    -moz-appearance: textfield;
    }

    input&:focus,
    textarea&:focus {
      outline: none;
    }

    #root {
      min-height: 100vh;
      display:flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.neutral.magnolia};

      @media screen and (max-width: ${size.desktop}){
        display:block;
      }
    }
    

`;

export default GlobalStyles;
