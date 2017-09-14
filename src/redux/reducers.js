import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';

export default combineReducers({
  routing: routerReducer,
  counter,
  userInfo
});
