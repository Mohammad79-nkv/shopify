import {combineReducers} from 'redux'
import productsReducer from './product';
import productSlice from './product'

const reducers = combineReducers({
    products: productsReducer
})

export default reducers;