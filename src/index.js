import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Gallery from './components/Gallery';

ReactDOM.render(
    <Router>
        <App path="/" />
        <Gallery path="gallery" />
    </Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
