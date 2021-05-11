import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --blue: #5175FF;
        --lightBlue: #829CFF;
        --lightBlack: #333950;
        --black: #25293A;
        --grey: #747B95;
        --red: #F05B5B;
        --white: #fff;
        --mainBG: #FAFAFA; 
    }
    html {
        box-sizing: border-box;
        font-size: 62.5%
    }
    *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-size: 1.6rem;
        color: var(--black);
        background-color: var(--mainBG);
    }
    // Css reset
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    // global classes
    .mainTitle {
        font-size: 4rem;
        font-weight: 700;
        line-height: 4.8rem;
        color: var(--lightBlack);
        @media(min-width: 1440px) {
            font-size: 5.6rem;
            line-height: 6.4rem;
        }
    }
    .secondaryTitle {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.6rem;
        color: var(--grey);
        @media(min-width: 1440px) {
            font-size: 1.8rem;
            line-height: 2.8rem;
        }
    }
    .tertiaryTitle {
        font-size: 1.6rem;
        line-height: 4.8rem;
        text-transform: uppercase;
        letter-spacing: 5px;
        color: var(--grey);
    }
`;

export default GlobalStyles;