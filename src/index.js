// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Components
import Home from './containers/Home';
// Utilities
import reducer from './reducers/reducers';

const initialState = {
  characters: [],
};
export const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
