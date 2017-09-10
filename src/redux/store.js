import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';
import clientMiddleware from './middleware/clientMiddleware.js';

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

export default store;

export function BuildStore(client) {
  const a = createStore(combineReducers,
    applyMiddleware(clientMiddleware(client)));
  return a;
}