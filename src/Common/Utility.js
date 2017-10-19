export default class Utility {
  static __Instance;

  constructor() {
    this._TempSaveContent = {};
    this.__ConstPrefix = 'WeiXinXTN';
  }

  /**
   * 实例
   * @returns {*}
   */
  static instance() {
    if (this.__Instance === null || typeof this.__Instance === 'undefined') {
      this.__Instance = new this();
    }
    return this.__Instance;
  }

  /**
   * 常量
   * @type {{SaveUrlPath: string}}
   */
  static constItem = {
    PageSize: 15, // 每页大小数据
    CaptchaTimeout: 60,
    /**
     * 当前的上下文
     */
    Context: 'XTNContext',                                             // 当前页面的Context
    ReduxKey: {
      ManualInputModify: 'ManualInputModify',
    },
    /**
     * 事件
     */
    Event: 'onXTNEvent',                                               // 事件。
    Events: {
      HttpStatus: {
        1: 'onHttpStatus_XTN_1',
        200: 'onHttpStatus_XTN_200',                  // 处理成功
        400: 'onHttpStatus_XTN_400',                  // 请求无效
        401: 'onHttpStatus_XTN_401',                  // 未授权访问
        402: 'onHttpStatus_XTN_402',
        403: 'onHttpStatus_XTN_403',                  // 禁止访问
        404: 'onHttpStatus_XTN_404',                  // 资源未找到
        405: 'onHttpStatus_XTN_405',
        406: 'onHttpStatus_XTN_406',
        407: 'onHttpStatus_XTN_407',
        408: 'onHttpStatus_XTN_408',
        409: 'onHttpStatus_XTN_409',
        411: 'onHttpStatus_XTN_411',                   // 登陆超时
        500: 'onHttpStatus_XTN_500',                   // 服务器错误
        501: 'onHttpStatus_XTN_501',
        502: 'onHttpStatus_XTN_502',
        503: 'onHttpStatus_XTN_503',
      },
      ShowModel: {
        OnActionSheet: 'onXTN_ShowModel_ActionSheet',                            //
        OnLoading: 'onXTN_ShowModel_Loading',                                    // 加载
        OnAlert: 'onXTN_ShowModel_Alert',                                        // 弹出信息
        OnConfirm: 'onXTN_ShowModel_Confirm',                                    // 确定--取消
        OnShowDialog: 'onXTN_ShowModel_ShowDialog',                              // 打开对话框
        OnShowDialogHide: 'onXTN_ShowModel_ShowDialogHide',                      // 隐藏对话框
        OnShowDialogClose: 'onXTN_ShowModel_ShowDialogClose',                    // 关闭对话框
        OnActionSheetHide: 'onXTN_ShowModel_ActionSheetHide',                    // 关闭
        OnLoadingHide: 'onXTN_ShowModel_LoadingHide',
        OnConfirmHide: 'onXTN_ShowModel_ConfirmHide',
      },
      OnGoBack: 'onXTNEvent_GoBack',                                             // 页面退回事件
      OnEditNavBarTitle: 'onXTNEvent_EditNavBarTitle',                           // 修改导航条标题
      OnEditNavBarRight: 'onXTNEvent_EditNavBarRight',                           // 修改导航条右边
      OnEditPageSliderInfo: 'onXTNEvent_EditPageSliderInfo',                     // 页面切换
      OnOpenDatePicker: 'onXTNEvent_OnOpenDatePicker',                           // 打开日期控件
      OnKeyboard: 'onXTNEvent_Keyboard',                                         // 获取焦点键盘弹起;失去焦点键盘消失
      OnSetTitle: 'onXTNEvent_OnSetTitle',                                       // 修改导航条的标题
    },
    /**
     * url 列表
     */
    UrlItem: {
      GoBack: 'goBack',                                                    // 回退操作
      Login: 'login',                                                      // 登录
      Page1: 'page1',                                                  // 首页-->商品列表
      Page2: 'page2',                                                  // 首页-->商品列表
      Page3: 'page3',                                                  // 首页-->商品列表
      Page4: 'page4',                                                  // 首页-->商品列表
      Counter: 'counter',                                                  // 首页-->商品列表
      UserInfo: 'userinfo',                                                  // 首页-->商品列表
      Es6: 'es6',                                                  // 首页-->商品列表
    },
    UrlTitle: {
      '/': { Title: '默认页面', Index: 0 },
      '/page1': { Title: 'page1', Index: 0 },
      '/page2': { Title: 'page2', Index: 0 },
      '/page3': { Title: 'page3', Index: 0 },
      '/page4': { Title: 'page4', Index: 0 },
      '/counter': { Title: '计数', Index: 0 },
      '/userinfo': { Title: '用户信息', Index: 0 },
      '/es6': { Title: 'Es6', Index: 0 },
    },
    /**
     * 显示模式
     */
    ShowModel: {
      ActionSheet: 'XTNShowModelActionSheet',                      //
      Loading: 'XTNShowModelLoading',                              // 加载
      Alert: 'XTNShowModelAlert',                                  // 弹出信息
      Confirm: 'XTNShowModelConfirm',                              // 确定--取消
    },
    KeyHistory: 'XTN_KEY_HISTORY',
    KeyGoBack: 'XTN_KEY_GOBACK'
  }

  /**
   * 是否是数组
   * @param obj
   * @returns {boolean}
   */
  static isArray(obj) {
    if (!obj || !obj.length || obj.length === 0) {
      return false;
    }
    return Array.isArray(obj);
  }

  /**
   * 判断是否为空
   * true-为空;false-不为空
   * @param obj
   * @returns {boolean}
   */
  static isNull(obj) {
    return obj === null;
  }

  /**
   * 判断是否是微信打开的
   * @returns {boolean}
   */
  static isWeiXin() {
    try {
      const ua = window.navigator.userAgent.toLowerCase();
      const isWeiXin = ua.match(/micromessenger/i).indexOf('micromessenger');
      console.log(isWeiXin);
      return isWeiXin >= 0;
    } catch (ex) {
      return false;
    }
  }

  /**
   * 浏览器信息
   * @returns {Browser}
   */
  static browserInfo() {
    const _Browser = {
      versions: () => {
        const uu = navigator.userAgent;
        // const app = navigator.appVersion;
        return {
          trident: uu.indexOf('Trident') > -1,                                     // IE内核
          presto: uu.indexOf('Presto') > -1,                                       // opera内核
          webKit: uu.indexOf('AppleWebKit') > -1,                                 // 苹果、谷歌内核
          gecko: uu.indexOf('Gecko') > -1 && uu.indexOf('KHTML') === -1,           // 火狐内核
          mobile: !!uu.match(/AppleWebKit.*Mobile.*/),                            // 是否为移动终端
          ios: !!uu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),                        // ios终端
          android: uu.indexOf('Android') > -1 || uu.indexOf('Adr') > -1,           // android终端
          iPhone: uu.indexOf('iPhone') > -1,                                       // 是否为iPhone或者QQHD浏览器
          iPad: uu.indexOf('iPad') > -1,                                            // 是否iPad
          webApp: uu.indexOf('Safari') === -1,                                    // 是否web应该程序，没有头部与底部
          weixin: uu.indexOf('MicroMessenger') > -1,                             // 是否微信 （2015-01-22新增）
          qq: uu.match(/\sQQ/i) === ' qq'                                         // 是否QQ
        };
      },
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    return _Browser;
  }

  /**
   * 是否IOS系统
   *
   * @static
   * @returns
   *
   * @memberOf Utility
   */
  static $isIOS() {
    try {
      const u = navigator.userAgent;
      const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      return isIOS;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }

  /**
   * 获取android版本
   *
   * @static
   * @returns
   *
   * @memberOf Utility
   */
  static $androidVersion() {
    const { userAgent } = navigator;
    if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1) {
      const num = userAgent.substr(userAgent.indexOf('Android') + 8, 3);
      return { type: 'Android', version: num };
    }
    return null;
  }

  /**
   * 对Date的扩展，将 Date 转化为指定格式的String
   * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
   * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
   * @method __FormatDate
   * @param fmt
   * @param date
   * @return {*}
   * @example
   *  Utility.FormatDate('yyyy-MM-dd hh:mm:ss.S',new Date());
   * @constructor
   */
  static formatDate(fmt, date) {
    if (!date) {
      return '';
    }
    let __this = new Date();
    let _fmt = fmt || 'yyyy-MM-dd HH:mm:ss.S';
    if (date !== null) {
      if (Date.parse(date)) {
        __this = date;
      } else {
        try {
          __this = new Date(date);
        } catch (ex) {
          __this = new Date();
        }
      }
    }
    const oo = {
      'M+': __this.getMonth() + 1, // 月份
      'd+': __this.getDate(), // 日
      'D+': __this.getDate(), // 日
      'H+': __this.getHours(), // 小时
      'h+': __this.getHours(), // 小时
      'm+': __this.getMinutes(), // 分
      's+': __this.getSeconds(), // 秒
      'q+': Math.floor((__this.getMonth() + 3) / 3), // 季度
      S: __this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(_fmt)) {
      /(y+)/.exec(_fmt);
      // const aa = /(y+)/.test(_fmt);
      // if (aa) {
      const fmt1 = _fmt.replace(RegExp.$1, (__this.getFullYear() + '').substr(4 - RegExp.$1.length));
      _fmt = fmt1;
      // }
    }
    for (const kk in oo) {
      if (new RegExp('(' + kk + ')').test(fmt)) {
        _fmt = _fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (oo[kk]) : (('00' + oo[kk]).substr(('' + oo[kk]).length)));
      }
    }
    return _fmt;
  }

  /**
   * 打印输出日志
   * @method __PrintLog
   * @param {object} args 内容
   * @private
   */
  static printLog(args) {
    try {
      let __callmethod = '';
      try {
        throw new Error();
      } catch (ex) {
        // console.log(e.stack);
        __callmethod = ex.stack.replace(/Error\n/).split(/\n/)[1].replace(/^\s+|\s+$/, '');
      }

      const _curDate = new Date();
      const _aa = _curDate.toLocaleDateString() + ' ' + _curDate.toLocaleTimeString() + '.' + _curDate.getMilliseconds();
      console.log('--begin->', _aa, ' call method :', __callmethod);
      const __content = JSON.stringify(args);
      console.log(__content);
    } catch (ex) {
      console.log('---------输出日志，传入的内容传为JSON出现在异常--------------');
      console.log(ex);
      console.log('---------输出日志，内容为下--------------');
      console.log(args);
    }
  }

  /**
   * 判断输入的是否是手机号
   * @method __PhonePattern
   * @param {number} phone 手机号
   * @return {boolean} true 成功；false 失败
   * @example
   *  Utility.PhonePattern('13000100100');
   * @private
   */
  static PhonePattern(phone) {
    const ex = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
    return ex.test(phone);
  }

  /**
   * 密码验证
   * @method __PasswordPattern
   * @param {string} password 密码
   * @return {boolean} true 成功；false 失败
   * @private
   */
  static PasswordPattern(password) {
    // test('/^[_0-9a-z]{6,16}$/i');
    const ex = /^[_0-9a-zA-Z]{6,25}$/;
    return ex.test(password);
  }

  /**
   * 是否含有中文（也包含日文和韩文）
   * @method __IsChineseChar
   * @param {string} str 要判断的内容
   * @return {boolean} true:成功;false:失败.
   * @private
   */
  static IsChineseChar(str) {
    // const reg = !/^[\u4E00-\u9FA5]/g;    // \uF900-\uFA2D
    // return !/^[\u4e00-\u9fa5]+$/gi.test(str);// .test(str);

    const regu = '^[\u4e00-\u9fa5]+$';
    const re = new RegExp(regu);
    return re.test(str);
  }

  /**
   * 设置内容,这里主要是用来存放临时数据的。
   * @method _SetContent
   * @param key  键值，用于下次的时候获取内容用的。其实就是 _TempSaveContent的属性名称。
   * @param content 要存储的内容
   * @param isSaveLocalStorage 是否保存到本地存储里面
   * @param IsUser 根据用户uid 来获取缓存里的数据。
   * @private
   */
  static setContent(key, content, isSaveLocalStorage, IsUser) {
    try {
      const self = this.instance();
      if (isSaveLocalStorage) {
        let __Content = content;
        if (IsUser) {
          const __UserInfo = self._TempSaveContent[this.constItem.API.UserInfo];
          if (typeof __UserInfo !== 'undefined' && __UserInfo !== null) {
            __Content = {};
            __Content[__UserInfo.member_id] = content;
          }
        }
        __Content = JSON.stringify(__Content);
        // __content = CryptoJS.AES.encrypt(__Content, __key);

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, __Content);
        }
      }
      self._TempSaveContent[key] = content;
    } catch (ex) {
      console.log(ex);
    }
  }

  /**
   * 删除指定字段值。
   * @method __RemoveContent
   * @param key
   * @return {null}
   * @private
   */
  static removeContent(key, IsRemoveLocalStorage) {
    try {
      const __self = this.instance();
      if (key === null || typeof key === 'undefined') {
        return;
      }
      if (__self._TempSaveContent[key]) {
        delete __self._TempSaveContent[key];
      }

      if (IsRemoveLocalStorage && typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (ex) {
      this.printLog(ex.toString());
    }
  }

  /**
   * 获取内容，
   * @method _GetContent
   * @param key 健名称。其实就是 _TempSaveContent的属性名称。
   * @return {*} 返回内容
   * @private
   */
  static getContent(key, IsUser) {
    try {
      let __Content = null;
      const __self = this.instance();
      if (__self._TempSaveContent[key]) {
        __Content = __self._TempSaveContent[key];
        return __Content;
      }
      if (typeof window === 'undefined') {
        return null;
      }
      if (__Content === null || typeof __Content === 'undefined') {
        const _value = window.localStorage.getItem(key);
        if (_value !== null && _value !== '' && typeof _value !== 'undefined') {
          const __JSONValue = JSON.parse(_value);
          __self._TempSaveContent[key] = __JSONValue;
          if (IsUser) {
            // 
          }
          __Content = __self._TempSaveContent[key];
        }
      }

      return __Content;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  /**
   * 判断是否是函数
   * @param func 判断函数对象
   * @returns {boolean} true:成功，false:失败。
   */
  static isFunction(func) {
    if (func !== null && typeof func !== 'undefined' && func.constructor.name === 'Function') {
      return true;
    }
    return false;
  }

  /**
   * 判断是否未定义
   * @param obj 判断对象
   * @returns {boolean} true:成功，false:失败。
   */
  static isUndefined(obj) {
    if (typeof obj === 'undefined') {
      return true;
    }
    return false;
  }

  /**
   * 判断是否未定义
   * @param obj 判断对象
   * @returns {boolean} true:成功，false:失败。
   */
  static isInvalid(obj) {
    if (typeof obj === 'undefined' || obj === null || obj === '' || obj === {}) {
      return true;
    }
    return false;
  }

  /**
   * 判断是否定义。
   * @param obj 判断对象
   * @return {boolean} true:成功，false:失败。
   */
  static isDefined(obj) {
    if (typeof obj !== 'undefined') {
      return true;
    }
    return false;
  }

  /**
   * 判断是否是日期类型
   *
   * @static    * @param {any} obj  判断对象
   * @returns {boolean} true: 是日期，false:不是日期。
   * @example
   *        Utility.isDate('abcadfa')  ---> false
   *        Utility.isDate(new Date()) ---> true
   *        Utility.isDate('2013年10月10日') ---> true
   * @memberOf Utility
   */
  static isDate(obj) {
    if (typeof obj === 'undefined' || obj === null || obj === '') {   // 判断是不是 undefined,或 null
      return false;
    }
    const __isDate = obj.constructor.name === 'Date';  // 如果传入的就是日期
    if (__isDate) {
      return true;
    }
    try {
      return (new Date(obj.replace('年', '-').replace('月', '-').replace('日', ''))).constructor.name === 'Date';
    } catch (ex) {
      return false;
    }
  }

  /**
   * 将一个 对象转成url参数与&分开
   *
   * @param params 参数对象
   * @param split 分割符
   * @returns {*}
   * @example {a:a,b:b,c:c,e:e}
   * a=a&b=b&c=c&e=e
   */
  static convertToUrlParams(params, options) {
    const { split, notFields } = options || {};
    if (this.isUndefined(params) || params === null) {
      return '';
    }
    const __KeyValue = [];
    const self = this;
    const __JSONValue = (value) => {
      try {
        let __JValue;
        if (value === null) {
          return '';
        }
        const { constructor } = value;
        if (typeof constructor === 'undefined' || constructor === null) {
          return '';
        }
        switch (value.constructor.name) {
          case 'Object':
            __JValue = '{' + this.convertToUrlParams(value) + '}';
            break;
          case 'Array':
            __JValue = JSON.stringify(value);
            break;
          default:
            __JValue = value;
        }
        return __JValue;
      } catch (ex) {
        console.log(ex.message);
        return value || '';
      }
    };
    Object.keys(params).forEach((key) => {
      const __value = params[key];
      if (self.isDefined(__value) && __value !== '') {
        if (key.toLowerCase() !== 'IsExistsNextData'.toLowerCase()) {
          // const __JsonValue = (self.isArray(__value) ? JSON.stringify(__value) : __value);
          if (notFields) {
            if (notFields.indexOf(key) === -1) {
              __KeyValue.push(key + '=' + __JSONValue(__value));
            }
          } else {
            __KeyValue.push(key + '=' + __JSONValue(__value));
          }
        }
      }
    });
    return __KeyValue.join(split || '&');
  }

  /**
   * 将 map对象 转成 key-value 数组对象
   * @param row
   * @returns {Array}
   */
  static convertMapToObject(row) {
    if (this.isUndefined(row) || this.isNull(row) || row === '') {
      return [];
    }
    const __Array = [];
    Object.keys(row).forEach((key) => {
      const __obj = {};
      __obj.key = key;
      __obj.value = row[key];
      __Array.push(__obj);
    });
    return __Array;
  }

  /**
   * 解析状态数据
   * @param state 状态
   * @param fieldName 字段名称
   * @param action 行为
   * @returns {*}
   */
  static parseStateMoreData(state, fieldName, action) {
    if (typeof action.result === 'undefined') {
      return state;
    }
    if (Utility.isUndefined(state[fieldName]) || state[fieldName] === null) {
      state[fieldName] = {};
    }
    const __Condition = action.Condition || {};
    const __pgIndex = __Condition.pgIndex || 0;
    const __pgCount = __Condition.pgCount || this.constItem.PageSize;
    const __Result = action.result;
    __Condition.IsExistsNextData = action.result.length === __pgCount;
    if (__pgIndex !== 0 && Utility.isArray(state[fieldName].List)) {
      state[fieldName].List = state[fieldName].List.concat(__Result);
    } else {
      state[fieldName].List = __Result;
    }
    __Condition.pgIndex = __Condition.IsExistsNextData ? (__pgIndex + 1) : __pgIndex;
    __Condition.pgCount = __pgCount;
    state[fieldName].Condition = __Condition;
    return state;
  }

  /**
   * 页面跳转
   * @param url 要跳转的页面。
   * @param params 参数
   */
  static toPage(url, params) {
    try {
      const __history = this.getContent(this.constItem.KeyHistory);
      if (this.isUndefined(url) || url === '' || this.isUndefined(__history)) {
        return;
      }
      this.$loadingHide();

      if (url === this.constItem.UrlItem.GoBack) {
        this.setContent(this.constItem.KeyGoBack, true);
        __history.goBack();
        return;
      }
      const __pathname = '/' + url;
      __history.push(__pathname, Object.assign(params || {}, { _timestamp: new Date().getTime() }));
    } catch (ex) {
      console.log(ex.toString());
    }
  }

  /**
   * 格式化
   * @example
   * sprintf('Latitude: %s, Longitude: %s, Count: %d', 41.847, -87.661, 'two')
   * Expected output: Latitude: 41.847, Longitude: -87.661, Count: 0
   * @returns {*}
   */
  static sprintf() {
    const args = arguments;
    const string = args[0];
    let __index = 1;
    return string.replace(/%((%)|s|d)/g, (mm) => {
      // m is the matched format, e.g. %s, %d
      let val = null;
      if (mm[2]) {
        val = mm[2];
      } else {
        val = args[__index];
        // A switch statement so that the formatter can be extended. Default is %s
        switch (mm) {
          case '%d':
            val = parseFloat(val);
            if (!val) {
              val = 0;
            }
            break;
          default:
            break;
        }
        __index += 1;
      }
      return val;
    });
  }

  /**
   * 格式化
   * @example
   * format('{0} is dead, but {1} is alive! {0} {2}', 'ASP', 'ASP.NET');
   * ASP is dead, but ASP.NET is alive! ASP {2}
   * @param format
   * @returns {*}
   */
  static format(format) {
    const args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, (match, number) => {
      return typeof args[number] !== 'undefined'
        ? args[number] : match;
    });
  }

  /**
   * 解析URL地址
   * @method __ParseURL
   * @param {string} url 完整的URL地址
   * @return {object} 自定义的对象
   * @example
   *  用法示例：var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top');
   * myURL.file='index.html'
   * myURL.hash= 'top'
   * myURL.host= 'abc.com'
   * myURL.query= '?id=255&m=hello'
   * myURL.params= Object = { id: 255, m: hello }
   * myURL.path= '/dir/index.html'
   * myURL.segments= Array = ['dir', 'index.html']
   * myURL.port= '8080'
   * yURL.protocol= 'http'
   * myURL.source= 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'
   */
  static parseURL(url) {
    const ae = document.createElement('a');
    ae.href = url;
    return {
      source: url,
      protocol: ae.protocol.replace(':', ''),
      host: ae.hostname,
      port: ae.port,
      query: ae.search,
      params: (() => {
        const ret = {};
        const seg = ae.search.replace(/^\?/, '').split('&');
        const len = seg.length;
        let ii = 0;
        let ss;
        for (; ii < len; ii += 1) {
          if (seg[ii]) {
            ss = seg[ii].split('=');
            ret[ss[0]] = ss[1];
          }
        }
        return ret;
      })(),
      file: (ae.pathname.match(/\/([^/?#]+)$/i) || [''])[1],
      hash: ae.hash.replace('#', ''),
      path: ae.pathname.replace(/^([^/])/, '/$1'),
      relative: (ae.href.match(/tps?:\/\/[^/]+(.+)/) || [''])[1],
      segments: ae.pathname.replace(/^\//, '').split('/')
    };
  }

  /**
   * 事件处理
   * @param eventName 事件名称
   * @param param1     参数名称1
   * @param param2     参数名称2
   * @param param3     参数名称3
   * @param param4     参数名称4
   * @param param5     参数名称5
   * @param param6     参数名称6
   * @param param7     参数名称7
   * @param param8     参数名称8
   * @param param9     参数名称9
   */
  static $emit(eventName, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
    if (this.isUndefined(eventName)) {
      return;
    }
    const event = this.getContent(this.constItem.Event);
    if (this.isUndefined(event) || event === null) {
      return;
    }
    if (!this.isFunction(event.emit)) {
      return;
    }
    event.emit(eventName, param1, param2, param3, param4, param5, param6, param7, param8, param9);
  }

  /**
   * 添加事件
   * @param eventName  {string}  事件名称
   * @param callBack  {function} 回调的方法名称
   */
  static $on(eventName, callBack) {
    if (this.isUndefined(eventName)) {
      return;
    }
    const event = this.getContent(this.constItem.Event);
    if (this.isUndefined(event) || event === null) {
      return;
    }
    if (!this.isFunction(event.on)) {
      return;
    }
    event.on(eventName, callBack);
  }

  /**
   * 弹出提示信息
   * @param Content 弹出显示内容
   * @param Title  弹出显示的标题，可以不填写，默认为当前导航条里的标题
   * @param ToPage 弹出来，页面跳转到下一个页面 {Url: Utility.constItem.UrlItem.Login, Options: {}}
   * @constructor
   */
  static $actionSheet(Content, Title, ToPage) {
    this.$emit(this.constItem.Events.ShowModel.OnActionSheet, {
      Title, ContentInfo: { Content }, ToPage
    });
  }

  /**
   * 确定，取消窗体
   * @param Message 信息内容
   * @param okButton 点击确定事件
   * @param Title 弹出窗体上的标题 (可空)
   * @param onCancel 点击取消事件  (可空)
   */
  static $confirm(Message, okButton, Title, onCancel, options) {
    this.$emit(
      this.constItem.Events.ShowModel.OnConfirm,
      {
        Title, Content: Message, okButton, onCancel, Options: options
      }
    );
  }

  static $showDialog(Html, Title, okButton, onCancel, Options) {
    this.$emit(
      this.constItem.Events.ShowModel.OnShowDialog,
      {
        Title, Html, okButton, onCancel, isShowAction: true,
        Options: Object.assign(Options || {}, { IsHideCancel: true, IsHideOk: true })
      }
    );
  }

  static $showDialogHide(args) {
    this.$emit(this.constItem.Events.ShowModel.OnShowDialogHide, args);
  }

  static $showDialogConfirm(msg, Title, okButton, onCancel) {
    let _title = Title;
    let _okButton = okButton;
    if (this.isFunction(Title)) {
      _title = '提示信息';
      _okButton = Title;
    }
    this.$emit(
      this.constItem.Events.ShowModel.OnShowDialog,
      {
        Content: msg, Title: _title, okButton: _okButton, onCancel
      }
    );
  }

  static $alert(msg, title) {
    let _title = title;
    let _okButton;
    if (this.isFunction(title)) {
      _title = '提示信息';
      _okButton = title;
    }
    this.$emit(
      this.constItem.Events.ShowModel.OnShowDialog,
      {
        Content: msg, Title: _title, okButton: _okButton, Options: { IsHideCancel: true }
      }
    );
  }

  /**
   * 打开加载动画
   */
  static $loading() {
    this.$emit(this.constItem.Events.ShowModel.OnLoading);
  }

  /**
   * 关闭加载动画
   */
  static $loadingHide() {
    this.$emit(this.constItem.Events.ShowModel.OnLoadingHide);
  }

  /**
   * 去空格
   * @param value
   * @returns {*}
   */
  static $trim(value) {
    if (typeof value !== 'undefined') {
      return value.replace(/(^\s*)|(\s*$)/g, '');
    }
    return '';
  }

  /**
   * 去右边空格
   * @param value
   * @returns {*}
   */
  static $trimRight(value) {
    if (typeof value !== 'undefined') {
      return value.replace(/(\s*$)/g, '');
    }
    return '';
  }

  /**
   * 去左边空格
   * @param s
   * @returns {*}
   */
  static $trimLeft(value) {
    if (typeof value !== 'undefined') {
      return value.replace(/(^\s*)/g, '');
    }
    return '';
  }

  /**
   * 菜单-->添加按键
   * @param Text
   * @param onClick
   * @param Color
   * @param BgColor
   */
  static $navBarRightAddButton(Text, onClick, Color, BgColor) {
    this.$emit(
      this.constItem.Events.OnEditNavBarRight,
      this.constItem.NavBarRightType.NBButton,
      {
        Text, onClick, Color, BgColor
      }
    );
  }

  /**
   * 菜单-->添加图标
   * @param Icon
   * @param onClick
   */
  static $navBarRightAddIcon(Icon, onClick) {
    this.$emit(
      this.constItem.Events.OnEditNavBarRight,
      this.constItem.NavBarRightType.NBIcon,
      { Icon, onClick }
    );
  }

  /**
   * 菜单-->添加菜单
   * [{Text:'菜单1',onClick:onClick},{Text:'菜单2',onClick:onClick},...]
   * @param MenuItem
   */
  static $navBarRightAddMenuItem(MenuItem) {
    this.$emit(this.constItem.Events.OnEditNavBarRight, this.constItem.NavBarRightType.NBMenu, MenuItem);
  }

  /**
   * 打开日期控件
   *
   * @static    * @param {datetime} currentDate 当前时间
   * @param {boolean} isShowTime 是否显示时间
   * @param {Function} ok  点击确定按钮事件-->这里可以获取到返回的日期
   * @param {Function} cancel 取消按钮事件
   *
   * @example
   *    // 打开日期
   *    Utility.$openDatePicker(new Date(),false,(date)=>{console.log(date);},()=>{ // cancel todo });
   *    // 打开日期和时间
   *    Utility.$openDatePicker(new Date(),true,(date)=>{console.log(date);},()=>{ // cancel todo });
   *    // 传入日期
   *    Utility.$openDatePicker('2013-10-10',false,(date)=>{console.log(date);},()=>{// cancel todo });
   *    // 传入日期和时间
   *    Utility.$openDatePicker('2010-10-10 12:20,true,(date)=>{console.log(date);},()=>{ // cancel todo });
   *    // 传入值，如果是null 或 '' 默认为当前时间
   *    Utility.$openDatePicker('',false,(date)=>{console.log(date);},()=>{// cancel todo });
   *
   * @memberOf Utility
   */
  static $openDatePicker(currentDate, isShowTime, ok, cancel) {
    this.$emit(this.constItem.Events.OnOpenDatePicker, currentDate, isShowTime, ok, cancel);
  }

  /**
   * 将日期转为时间戳
   *
   * @static    * @param {any} date
   * @returns
   *
   * @memberOf Utility
   */
  static $convertToTimestamp(date) {
    if (typeof date === 'undefined' || date === null || date === '') {
      return 0;
    }
    if (this.isDate(date)) {
      // replace(/(\s*$)/g, '') r.replace(/-/g, "/")
      return date.constructor.name === 'Date' ? date.getTime() : new Date(date.replace('年', '-').replace('月', '-').replace('日', '').replace(/-/g, '/')).getTime();
    }
    return 0;
  }

  /**
   * 将时间戳转为日期类型
   *
   * @static    * @param {number} value
   * @returns
   * @example
   *    Utility.$convertToDateByTimestamp('1478131200000') -> 2016-11-03
   *    Utility.$convertToDateByTimestamp('1478131200000','yyyy年MM月dd日') -> 2016年11月03日
   * @memberOf Utility
   */
  static $convertToDateByTimestamp(value, format) {
    if (this.$isNumber(value)) {
      const __date = new Date(parseInt(value, 0));
      return this.formatDate(format || 'yyyy-MM-dd', __date);
    }
    return '';
  }

  /**
   * 字符串转为日期类型
   *
   * @static    * @param {string} value 日期
   * @returns Date 或为 null
   * @example
   *  Utility.$convertToDateByString('2013-10-10');
   * @memberOf Utility
   */
  static $convertToDateByString(value) {
    if (this.isDate(value)) {
      return value.constructor.name === 'Date' ? value : new Date(value.replace('年', '-').replace('月', '-').replace('日', ''));
    }
    return null;
  }

  /**
   * 状态转换，将状态转为对应显示的名称
   *
   * @static    * @param {object} obj 对象
   * @param {string} status 状态
   * @returns 返回状态对应的名称
   *
   * @memberOf Utility
   */
  static $statusConvert(obj, status) {
    if (this.isUndefined(obj) || obj === null || obj === '') {
      return this.isUndefined(status) ? '' : status;
    }
    if (this.isUndefined(status)) {
      return '';
    }
    const __Value = obj[status];
    return __Value || status;
  }

  /**
   * @param value
   * @returns {*}
   */
  static $isNumber(value) {
    if (typeof value === 'undefined' || value === null || value === '') {
      return false;
    }
    return /^\+?[0-9]\d*$/.test(value);
  }

  /**
   * 格式化数字
   *
   * @static
   * @param {any} number
   * @returns
   *
   * @example Utility.$formatNumber(10000) ==> 10,000
   * @memberOf Utility
   */
  static $formatNumber(number) {
    if (!this.$isNumber(number)) {
      return number;
    }
    const __value = this.$trim(number);
    return String(__value).split('').reverse().join('')
      .replace(/(\d{3})(?=[^$])/g, '$1,')
      .split('')
      .reverse()
      .join('');
  }

  /**
   * 判断是否为空
   *
   * @static
   * @param {string} value 要判断的值
   * @returns true:是 ; false:否
   *
   * @memberOf Utility
   */
  static $isEmpty(value) {
    if (!value) {
      return true;
    }
    const __value = this.$trim(value);
    if (__value === '') {
      return true;
    }
    return false;
  }

  static $clone(obj) {
    if (!obj) {
      return null;
    }
    const __temp = {};
    Object.keys(obj).forEach((key) => {
      if (key !== 'IsExistsNextData' && key !== '_timestamp') {
        __temp[key] = obj[key] ? obj[key].toString() : '';
      }
    });
    return __temp;
  }

  /**
   * 后退操作
   *
   * @static
   *
   * @memberOf Utility
   */
  static $goBack(times) {
    this.toPage(this.constItem.UrlItem.GoBack, { times });
  }
}
