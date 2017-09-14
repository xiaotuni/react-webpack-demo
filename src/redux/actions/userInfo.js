export const GET_USER_INFO_LOADING = 'userinfo/loading';
export const GET_USER_INFO_SUCCESS = 'userinfo/success';
export const GET_USER_INFO_FAIL = 'userinfo/fail';

export function getUserInfo() {
  return {
    types: [GET_USER_INFO_LOADING, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
    promise: (client) => client.get(client.API.UserInfo, { params: { id: 1 }, data: { data: 1234 } })
  };
}

