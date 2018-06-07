import { combineReducers } from 'redux'
import formReducer from './formReducer'
import post from './post';

export default combineReducers({
  formReducer,
  post
})
