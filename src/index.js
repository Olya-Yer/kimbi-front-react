import React from 'react'
import ReactDom from 'react-dom'
import 'react-bootstrap'
import 'bootstrap-slider'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'babel-runtime/core-js/json/stringify';


// import { Provider } from 'react-redux'
// import store from './store'

ReactDom.render(
    // <Provider store={store}>
    <Router>
        <App />
    </Router>
    // </Provider>
    ,
    document.getElementById('root')
);
