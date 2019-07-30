import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const container = document.getElementById('app');

const store = createStore(
    reducers, //todos los reducers
    {}, // estado inicial
    applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    container);
