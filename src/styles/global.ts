import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
}


body{
  font: 400 14px 'Montserrat', sans-serif;
    background: #0E0E0E;
    color: #FFFF;
    -webkit-font-smoothing: antialiased;
}
body, input, button {
    font: 16px Montserrat, sans-serif;
  }

`;
