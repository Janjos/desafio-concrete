import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router as BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('app'))