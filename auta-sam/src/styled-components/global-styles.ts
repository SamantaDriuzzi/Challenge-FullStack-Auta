import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #864BFA;
    --color-secondary: #FFFFFF;
    --color-tertiary:  #A579FD;
    --font-size-normal: 20px;
    --font-size-large: 34px;
    --family-color: #FFFFFF;
    --family-color-secondary: #1E1E1E;
    --font-family: 'Nunito', sans-serif;
    --background-color: linear-gradient(248deg, rgba(217,210,195,1) 0%, rgba(250,218,221,1) 65%, rgba(192,151,132,1) 100%);;
  }
  .title {
    font-family: var(--font-family);
    margin: 50px;
    font-size: var(--font-size-large);
  }
`;