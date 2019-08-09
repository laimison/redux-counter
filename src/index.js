// Generic React import
// import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Main Redux App
import App from './App';
import counter from "./reducer";

// Creates a store - ensure that every component has access to the Redux Store
var store = createStore(counter);

// Not important stuff - just ability to watch the Redux store in the console with store.getState();
if(process.env.NODE_ENV !== 'production') {
  window.store = store;
}

// Render
ReactDOM.render(
  <Provider store={store}>
    <center><p>Counter</p></center>
    <App />
  </Provider>,
  // Relations to index.html
  document.querySelector("#container")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
