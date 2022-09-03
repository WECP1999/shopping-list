import { createGlobalStyle } from 'styled-components';
import { IThemeProps } from '../utils/interfaces/IThemeProps.interface';

const GlobalStyle = createGlobalStyle<{ theme: IThemeProps }>`
    * {
        margin: 0;
        padding: 0;
    }
    
    body {
        margin: 0;
        font-family: sans-serif;
        height: 100%;
        font-size: 1rem;
        color: ${(props) => props.theme.text.secondary};
    }

    html, #root {
        height: 100%;
        overflow: hidden;
        padding: 0 32px 32px;
    }

    input {
        font-family: sans-serif;
        color: ${(props) => props.theme.text.primary};
    }

    button {
        font-family: sans-serif;
        background: transparent;
        border: none;

        &:hover {
            cursor: pointer
        }
    }

    h1, h2, h3 {
        font-family: sans-serif;
        color: ${(props) => props.theme.text.primary};
    }

    .bold {
        font-family: sans-serif;
    }

    .dark {
        color: ${(props) => props.theme.text.primary};
    }
    `;

export default GlobalStyle;
