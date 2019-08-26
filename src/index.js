import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { MEDIA_QUERY } from './constants';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    margin: 0 !important;

    @media (max-width: ${MEDIA_QUERY.TABLET}) {
        font-size: 12px;
    }

    @media (max-width: ${MEDIA_QUERY.MOBILE}) {
        font-size: 10px;
    }
  }
`;

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.Fragment>
    , document.getElementById('app'))