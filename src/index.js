import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, HashRouter} from "react-router-dom";
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter future={"/RPI_laba2"}>
        <App />
    </HashRouter>
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>

);


