import { GET_USER_INFO_LOADING, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL } from 'actions/userInfo';

const initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: '',
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_USER_INFO_FAIL:
      return {
        ...state, isLoading: false, userInfo: null, errorMsg: '请求错误啦',
      };
    case GET_USER_INFO_LOADING:
      return {
        ...state, isLoading: true, userInfo: null, errorMsg: '请求中...',
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state, isLoading: false, userInfo: action.result, errorMsg: '成功了',
      };
    default:
      return state;
  }
}
