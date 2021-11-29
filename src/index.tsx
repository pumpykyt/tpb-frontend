import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./redux/store";

const app = (
    <Provider store={setupStore()}>
        <App />
    </Provider>
);

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
