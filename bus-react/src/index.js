import React from 'react';
import { render } from 'react-dom'
import {createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import App from './components/App'
import reducers from './reducers'
import logger from 'redux-logger';
import {fromJS} from 'immutable';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

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
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/repo" component={Repo}/>
        <Route path="/select" component={SelectPage}/>
        <Route path="/bus" component={BusPage}/>
        <Route path="/comment" component={CommentPage}/>
        <Route path="/booking" component={BookingPage}/>
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
