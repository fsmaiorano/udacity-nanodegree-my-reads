import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('root'));
