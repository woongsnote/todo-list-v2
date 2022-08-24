import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    button{
        width: 96px;
        height: 36px;
        background-color: white;
        border-radius: 4px;
        &:hover {
                    cursor: pointer;
                    color: #fff;
                    font-weight: bold;
        }
    }
`;

export default GlobalStyle;
