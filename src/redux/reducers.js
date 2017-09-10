// import counter from 'reducers/counter';
// import userInfo from 'reducers/userInfo';

// export default function combineReducers(state = {}, action) {
//   return {
//     counter: counter(state.counter, action),
//     userInfo: userInfo(state.userInfo, action)
//   };
// }

/**
 * ----------------------------
 * 使用 redux 的combineReducers
 * 
 */

// import { combineReducers } from 'redux';
// import counter from 'reducers/counter';
// import userInfo from 'reducers/userInfo';

// export default combineReducers({
//   counter, userInfo
// });

import { combineReducers } from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';

export default combineReducers({
  counter,
  userInfo
});