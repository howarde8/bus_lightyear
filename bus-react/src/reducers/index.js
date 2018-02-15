import { combineReducers } from 'redux'
import products from './products';
import loadingstate from './loadingstate';
const reducers = combineReducers({
    products,
    loadingstate,
})

export default reducers