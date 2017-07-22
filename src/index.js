import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './components/App.jsx';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

render(<App store={store} />, document.getElementById('app'));
