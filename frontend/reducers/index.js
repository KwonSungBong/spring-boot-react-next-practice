import { combineReducers } from 'redux'
import {reducer as reduxForm} from 'redux-form';
import product from './product';
import post from './post';

export default combineReducers({
    reduxForm,
    product,
    post
})
