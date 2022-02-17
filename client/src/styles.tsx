import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './types/ThemeTypes.type';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        paddding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    #root {
        margin: 0 auto;
    }

    html {-webkit-backgroun-size: cover;
        -moz-backgroun-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
`;
