import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form';
import product from './product';
import post from './post';
import image from './image';

export default combineReducers({
    form,
    product,
    post,
    image
})
