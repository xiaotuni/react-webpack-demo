import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];
function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  // const _ApiUrl = 'http://127.0.0.1:11111/react/www' + adjustedPath;
  // const _ApiUrl = 'https://127.0.0.1:30081/webapi' + adjustedPath;
  const _ApiUrl = 'http://192.168.199.201:3000/api' + adjustedPath;
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
    Users: 'userinfo/users',
    MapPlacelist: 'map/placelist',
    Demo: 'demo',
    RabbitMQ: {
      helloworldNumber: 'rabbitmq/helloworldNumber',
      helloworld: 'rabbitmq/helloworld',
      helloworldStatus: 'rabbitmq/helloworldStatus/{0}',
    },
    Ctrs: {
      order: 'ctrls/order/',
      orderStatus: 'ctrls/order/{0}',
    }
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
        request.header.token = 'xtn_21232f297a57a5a743894a0e4a801fc3_c3284d0f94606de1fd2af172aba15bf3';

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
            const { body } = response || {};
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
