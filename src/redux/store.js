import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers.js';
import clientMiddleware from './middleware/clientMiddleware.js';

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// export default store;

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

export function BuildStore(client, history) {

  // const a = createStore(combineReducers({
  //   ...reducers,
  //   router: routerReducer
  // }), applyMiddleware(clientMiddleware(client)));
  // return a;

  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [clientMiddleware(client), reduxRouterMiddleware];
  const finalCreateStore = applyMiddleware(...middleware)(createStore);
  return finalCreateStore(reducers);
}