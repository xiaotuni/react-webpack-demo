import cfg from '../config';
const { isProduction } = cfg;

import App from './App/App';
import Default from './Default/Default';
import page1 from './page1/page1';
import page2 from './page2/page2';
import page3 from './page3/page3';
import page4 from './page4/page4';
import Home from './Home/Home';
import Counter from './Counter/Counter';
import UserInfo from './UserInfo/UserInfo';
import Es6 from './Es6/Es6';
import Redis from './Redis/Redis';
import Createjs from './Createjs/Createjs';

const obj = {
  Createjs,
  Default, page1, page2, page3, page4, Home, UserInfo, Es6, Counter, Redis
};
if (!!isProduction) {
  // 生产环境下使用懒加载方法
  Object.keys(obj).forEach((key) => {
    try {
      obj[key] = require('bundle-loader?lazy&name=[name]!containers/' + key + '/' + key);
    } catch (ex) {
      console.log(ex);
    }
  });
}
export default Object.assign(obj, { App });
