import {combineReducers} from 'redux-immutable';
import products from './products';
<<<<<<< HEAD
import visibilityFilter from './visibilityFilter';
const reducers = combineReducers({
    products,
    visibilityFilter,
=======
import loadingstate from './loadingstate';
const reducers = combineReducers({
    products,
    loadingstate,
>>>>>>> add action
})

export default reducers