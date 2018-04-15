import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import logger from 'redux-logger';
import {fromJS} from 'immutable';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'

//...pages 
import HomePage from './components/HomePage';
import Repo from './components/Repo';
import BusPage from './containers/BusPage';
import CommentPage from './containers/CommentPage';
import SelectPage from './containers/SelectPage';
import BookingPage from './containers/BookingPage';
import BackendPage from './containers/BackendPage';
import PublishPage1_Company from './containers/PublishPage1_Company';
import ProductPage from './containers/ProductPage';

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
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/backend" component={BackendPage}/>
        <Route path="/repo" component={Repo}/>
        <Route path="/select" component={SelectPage}/>
        <Route path="/bus" component={BusPage}/>
        <Route path="/comment" component={CommentPage}/>
        <Route path="/booking" component={BookingPage}/>
        <Route path="/product" component={ProductPage}/>
        <Route path="/publish_1_company" component={PublishPage1_Company}/>
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
