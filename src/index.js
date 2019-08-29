import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/styles/Global';

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.Fragment>
    , document.getElementById('app'))