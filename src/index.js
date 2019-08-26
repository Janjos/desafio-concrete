import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
      font-size: 16px;
      margin: 0 !important;
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