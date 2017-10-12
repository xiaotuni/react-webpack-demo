import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];
function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  const _ApiUrl = 'http://127.0.0.1:11111/react/www' + adjustedPath;
  return _ApiUrl;
}

export default class ApiClient {
  API = {
    /**
     * 通用的方法。
     */
    Common: {

    },
    UserInfo: 'api/user.json',
  }

  constructor() {
    const self = this;
    methods.forEach((method) =>
      self[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));
        if (params) {
          request.query(params);
        }
        if (data) {
          request.send(data);
        }

        /**
         * 错误处理及提示
         *
         * @param {any} err
         */
        function __ProcessError(err) {
          try {
            if (err.status) {
              console.log(err.status);
            } else if (!!err.crossDomain) {
              console.log('与服务器连接中断...');
            } else if (err.message && err.message !== '') {
              console.log(err.message);
            }
          } catch (ex) {
            console.log(ex);
          }
        }

        function __SendRequest(_request) {
          _request.end((err, response) => {
            const { body, headers } = response || {};
            const { date } = headers || {};
            console.log(date);
            if (err) {
              __ProcessError(err, body, response);
              reject(body || err);                    // reject-->拒绝; resolve-->解决
            } else {
              if (!body) {
                console.log({ status: response.status, msg: '处理成功' });
              }
              setTimeout(() => {
                resolve(body);
              }, 1000);
            }
          });
        }

        try {
          __SendRequest(request);
        } catch (ex) {
          console.log(ex);
        }
      }));
  }
  empty() {
  }
}
