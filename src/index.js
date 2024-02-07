import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state, action) => {

  // For plus
  if (action.type === "plus") {
    return state + 1
  }

  // For minus
  if (action.type === "minus") {
    if (state > 0) {
      return state - 2
    } else if (state < 0) {
      return 0
    }
  }

  // For reset
  if (action.type === "reset") {
    return 0
  }

  return 0
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);