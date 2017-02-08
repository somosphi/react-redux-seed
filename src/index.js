import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './components/App';


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

render(
  <App store={store} />,
  document.getElementById('app')
);
