export const GET_USER_INFO_LOADING = 'userinfo/loading';
export const GET_USER_INFO_SUCCESS = 'userinfo/success';
export const GET_USER_INFO_FAIL = 'userinfo/fail';

function getUserInfoRequest() {
  return { type: GET_USER_INFO_LOADING };
}
function getUserInfoSuccess(userInfo) {
  return { type: GET_USER_INFO_SUCCESS, userInfo };
}
function getUserInfoFail() {
  return { type: GET_USER_INFO_FAIL }
}

export function getUserInfo() {
  return function (dispatch) {
    dispatch(getUserInfoRequest);
    return fetch('http://127.0.0.1:11111/api/user.json')
      .then((res) => res.json())
      .then((json) => dispatch(getUserInfoSuccess(json)))
      .catch((ex) => dispatch(getUserInfoFail()))
  }
}