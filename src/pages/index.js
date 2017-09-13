import Page1 from 'bundle-loader?lazy&name=page1!pages/page1';
import Page2 from 'bundle-loader?lazy&name=page2!pages/page2';
import Page3 from 'bundle-loader?lazy&name=page3!pages/page3';
import Page4 from 'bundle-loader?lazy&name=page4!pages/page4';
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';

export default {
  Page1, Page2, Page3, Page4, Home, Counter, UserInfo
}