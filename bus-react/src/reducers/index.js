import {combineReducers} from 'redux-immutable';
import products from './products';
import visibilityFilter from './visibilityFilter';
const reducers = combineReducers({
    products,
    visibilityFilter,
})

export default reducers
