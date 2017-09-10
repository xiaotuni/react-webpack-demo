import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];
function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  const _ApiUrl = 'http://127.0.0.1:11111' + adjustedPath;
  return _ApiUrl;
}

export default class ApiClient {

  API = {
    /**
     * 通用的方法。
     */
    Common: {
      LoginInfo: '/login',
      /**
       * get 获取系统当前时间
       *  ------------------------------------------------------------------------------
       * name(字段名称)      description(描述)   type(类型)      Required(是否是必须的) 
       *  token                用户令牌           字符串             是          
       * 
       * 
       */
      SystemTimes: '/systemTimes',

      /**
       * get 标签列表              httptoken
       * ----------------------------------------------------------------------------------
       * name(字段名称)       type(类型)         Required(是否是必须的)     description(描述)    
       * 
       * @url /labels
       */
      Labels: '/labels',
      /**
       * post 添加标签              httptoken
       * ----------------------------------------------------------------------------------
       * name(字段名称)       type(类型)         Required(是否是必须的)     description(描述)    
       * 
       * @url /labels
       */
      AddLabels: '/labels',
      /**
       * del 删除标签              httptoken
       * ----------------------------------------------------------------------------------
       * name(字段名称)       type(类型)         Required(是否是必须的)     description(描述)    
       * 
       * @url /labels/{label_id}
       */
      DeleteLabels: '/labels/{0}',
      /**
       * get 获取群组列表              httptoken
       * ----------------------------------------------------------------------------------
       * name(字段名称)       type(类型)         Required(是否是必须的)     description(描述)    
       * pg_index             int                否                        页码                    
       * pg_count             int                否                        每页记录数量
       * 
       * @url /groups?pg_index=0&pg_count=15
       */
      Groups: '/groups',
      /**
       * get 获取评论列表              httptoken
       * ----------------------------------------------------------------------------------
       * name(字段名称)       type(类型)         Required(是否是必须的)     description(描述)    
       * source_type          string             否                        数据源类型                    
       * source_id            int                否                        数据源标识	
       * blog_id              int                否                        动态标识
       * pg_index             int                否                        页码                    
       * pg_count             int                否                        每页记录数量
       * 
       * @url /comments?pg_index=0&pg_count=15
       */
      Comments: '/comments',
      /**
       * get 获取点赞列表              httptoken
       * ----------------------------------------------------------------------------------
       * name(字段名称)       type(类型)         Required(是否是必须的)     description(描述)    
       * source_type          string             否                        数据源类型                    
       * source_id            int                否                        数据源标识	
       * blog_id              int                否                        动态标识
       * pg_index             int                否                        页码                    
       * pg_count             int                否                        每页记录数量
       * 
       * @url /praises?pg_index=0&pg_count=15
       */
      Praises: '/praises',
    },
    UserInfo: 'api/user.json',
  }

  constructor() {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {

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
        function __ProcessError(err, body, __req) {
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
              reject(body || err);      // reject-->拒绝; resolve-->解决
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
