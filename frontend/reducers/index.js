import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form';
import product from './product';
import post from './post';

export default combineReducers({
    form,
    product,
    post
})
