import React from 'react';
import { render } from 'react-dom'
import {createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import App from './components/App'
import reducers from './reducers'
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import {fromJS} from 'immutable';

const initialState = {};

const store = createStore(
  reducers,
  fromJS(initialState),
  applyMiddleware(logger),
  )

// console.log('123',store.getState().get('products'));
render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
