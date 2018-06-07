import { combineReducers } from 'redux'
import formReducer from './formReducer'
import product from './product';

export default combineReducers({
    formReducer,
    product
})
