import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: ${colors.background};
        --shape: ${colors.shape};
        --title: ${colors.title};
        --text: ${colors.text};
        --purple: ${colors.purple};
        --purple-light: ${colors.purple_light};
        --green: ${colors.green};
        --ruby: ${colors.ruby};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }

        @media (max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
        border: 0;
    }

    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0, .5);
    }

    .react-modal-content {
        position: relative;
        padding: 3rem;
        width: 100%;
        max-width: 576px;
        border-radius: 0.25rem;
        background: ${colors.shape};
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter .2s ease;

        &:hover {
            filter: brightness(.8);
        }
    }
`;