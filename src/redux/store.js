import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import reducers from './reducers.js';
import clientMiddleware from './middleware/clientMiddleware.js';

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// export default store;

import { routerMiddleware } from 'react-router-redux';

export default function BuildStore(client, history) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [clientMiddleware(client), reduxRouterMiddleware];
  const finalCreateStore = applyMiddleware(...middleware)(createStore);
  return finalCreateStore(reducers);
}
