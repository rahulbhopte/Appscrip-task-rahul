import {combineReducers} from 'redux';
import { productReducer } from './productReducer';
import { selectedProductReducer } from './productReducer';
//here we copmbine all reducers in one reducers
const reducers=combineReducers({
    allProducts:productReducer,
    slectedProducts:selectedProductReducer,
})

export default reducers