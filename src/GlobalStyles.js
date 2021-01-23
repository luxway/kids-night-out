import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: ${props => props.theme.fonts.main};
        overflow-x: hidden;
    }
`