import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import { fromJS } from 'immutable';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import rootSaga from './sagas'

//...pages 

import Repo from './components/Repo';

import HomePage from './containers/HomePage';
import BusPage from './containers/BusPage';
import CommentPage from './containers/CommentPage';
import SelectPage from './containers/SelectPage';
import BookingPage from './containers/BookingPage';
import BackendPage from './containers/BackendPage';
import PublishPage1_Company from './containers/PublishPage1_Company';
import PublishPage2_BusInfo from './containers/PublishPage2_BusInfo';
import PublishPage3_Accessory from './containers/PublishPage3_Accessory';
import PublishPage4_Promote from './containers/PublishPage4_Promote';
import PublishPage5_Calendar from './containers/PublishPage5_Calendar';
import PublishPage6_Price from './containers/PublishPage6_Price';
import PublishPage7_Rule from './containers/PublishPage7_Rule';
import PublishPage8_Finish from './containers/PublishPage8_Finish';
import ProductPage from './containers/ProductPage';
import Article_Consumer from './components/Article_Consumer';
import Article_Privacy from './components/Article_Privacy';
import Article_Service from './components/Article_Service';




const initialState = {};

const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  fromJS(initialState),
  applyMiddleware(logger, middleware, sagaMiddleware),
  )
sagaMiddleware.run(rootSaga)

/
// ... my fucking testing area
console.log(store.getState());
// const { loggedFlag } = store.getState().get('authReducer');
// console.log(loggedFlag);

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
        <Route path="/publish_2_bus_info" component={PublishPage2_BusInfo}/>
        <Route path="/publish_3_accessory" component={PublishPage3_Accessory}/>
        <Route path="/publish_4_promote" component={PublishPage4_Promote}/>
        <Route path="/publish_5_calendar" component={PublishPage5_Calendar}/>
        <Route path="/publish_6_price" component={PublishPage6_Price}/>
        <Route path="/publish_7_rule" component={PublishPage7_Rule}/>
        <Route path="/publish_8_finish" component={PublishPage8_Finish}/>
        <Route path="/article_consumer" component={Article_Consumer}/>
        <Route path="/article_privacy" component={Article_Privacy}/>
        <Route path="/article_service" component={Article_Service}/>

      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
