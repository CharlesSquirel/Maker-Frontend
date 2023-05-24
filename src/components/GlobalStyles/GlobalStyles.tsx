import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --white: #fff;
    --black: #000;
    --turqoise: #3ee9e5;
    --blue: #093f68;
    --dark-blue: #080c20;
    --gray: #777f98;
    --error: #ff2965;
    --regular: 500;
    --bold: 800;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;

}
body {
    font-size: 15px;
    font-weight: var(--regular);
    background: var(--dark-blue);
    color: var(--white);
}
input {
    border: none;
    outline: 0;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    :focus {
        border: 1px solid var(--turqoise) 
    }
}
button {
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
}
/* img {
    width: 100%;
    height: 100%;
    object-fit: contain;
} */
p {
    color: #777F98;
}

`;
