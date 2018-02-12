import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import Common from 'reducers/reduxCommon';
 
export default combineReducers({
  routing: routerReducer, counter, userInfo, Common
});
