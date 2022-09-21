/* eslint-disable import/no-named-as-default */
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/configureStore';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
