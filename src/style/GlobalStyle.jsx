import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    button{
        width: 120px;
        height: 40px;
        background-color: white;
        border-radius: 12px;
        &:hover {
                    cursor: pointer;
                    color: #fff;
                    font-weight: bold;
        }
    }
`;

export default GlobalStyle;
