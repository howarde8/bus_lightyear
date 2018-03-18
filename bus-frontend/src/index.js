import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import logger from 'redux-logger';
import {fromJS} from 'immutable';
import createHistory from 'history/createBrowserHistory'
import {createStore, applyMiddleware, combineReducers } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'
import Homepage from './components/Homepage';
import Repo from './components/Repo';

const initialState = {};

const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  fromJS(initialState),
  applyMiddleware(logger,middleware),
  )

// store.dispatch(push('/repo'));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/repo" component={Repo}/>
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
