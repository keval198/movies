import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/index"
import createSagaMiddleware from 'redux-saga'
import getMovieSaga from './sagas/getMovieSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:reducer,
    middleware:[sagaMiddleware]
})

sagaMiddleware.run(getMovieSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();