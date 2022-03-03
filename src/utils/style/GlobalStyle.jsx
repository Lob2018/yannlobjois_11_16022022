import { createGlobalStyle } from 'styled-components'
import colors from './colors.js'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', sans-serif;
      font-size:18px;
      a:link,a:visited,a:hover,a:active{
        color: ${colors.primary};
      }           
    }    
    body {
      margin: 0;
      background-color: ${colors.bg};
    }
    header{
      margin : 40px 100px 0px 100px ;
    }
    header nav a {
      font-size:24px; 
      text-decoration: none;       
    }
    [aria-current] {
      text-decoration:underline;
    }
    main{
      margin : 0px 100px 0px 100px ;
    }
    footer{
      background-color: #000;
      color: #fff;
    }
    .hidden { 
      display:none; 
    }
    @media only screen and (max-width: 768px) {
      * {
        font-size:12px;
      }
      header{
        margin : 20px 20px 0px 20px ;
      }
      header nav a {
        font-size:12px;        
      }
      main{
        margin : 0px 20px 0px 20px ;
      }    
    }    
`
function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
