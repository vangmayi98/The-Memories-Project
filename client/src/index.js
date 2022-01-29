import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //to keep track of the store and allow us to access the store from anywhere.
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
