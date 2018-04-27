// import {combineReducers} from 'redux-immutable';
import products from './products';
import visibilityFilter from './visibilityFilter';
import order from './order';
import authReducer from './authReducer';
const reducers = {
    products,
    visibilityFilter,
    order,
    authReducer,
}

export default reducers