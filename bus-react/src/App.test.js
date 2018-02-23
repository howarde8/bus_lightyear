import React from 'react'
import { render } from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import logger from 'redux-logger';
import {fromJS} from 'immutable';

const initialState = [];

const store = createStore(
  reducer,
  formJS(initialState),
  applyMiddleware(logger),
  )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)