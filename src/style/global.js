import { createGlobalStyle } from "styled-components";
import './style.css'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button:hover {
        cursor: pointer;
    }

    ul, ol, li {
        list-style: none;
    }
`

export default GlobalStyle;