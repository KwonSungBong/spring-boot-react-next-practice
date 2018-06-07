import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';
import reducer from './reducers'

export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, apiMiddleware)))
}
