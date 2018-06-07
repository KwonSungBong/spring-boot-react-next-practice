import { combineReducers } from 'redux'
import formReducer from './formReducer'
import product from './product';
import post from './post';

export default combineReducers({
    formReducer,
    product,
    post
})
