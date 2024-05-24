import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    line-height: 1.15;
    text-size-adjust: 100%;
    tab-size: 4;
}

body, h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, figure, blockquote, pre {
    margin: 0;
    padding: 0;
}

ul, ol {
    list-style: none;
}

a {
    text-decoration: none;
}

button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
}

input, textarea {
    border: none;
    outline: none;
    background: none;
}

:focus {
    outline: none;
}
`;

export default GlobalStyles;
