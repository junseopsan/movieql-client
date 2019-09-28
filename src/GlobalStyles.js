import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  ${reset};
  body{
    font-family: 'Maven Pro', sans-serif;
    background-color: #ecf0f1;
  }
  a{
      color:inherit;
  }
  main { 
    width: 60%;
    margin: 0 auto;
    padding: 20px;
  }
`;

export default globalStyles;
