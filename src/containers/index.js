import Default from 'bundle-loader?lazy&name=default!containers/Default/Default';
import Page1 from 'bundle-loader?lazy&name=page1!containers/page1';
import Page2 from 'bundle-loader?lazy&name=page2!containers/page2';
import Page3 from 'bundle-loader?lazy&name=page3!containers/page3';
import Page4 from 'bundle-loader?lazy&name=page4!containers/page4';
import Home from 'bundle-loader?lazy&name=home!containers/Home/Home';
import Counter from 'bundle-loader?lazy&name=counter!containers/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!containers/UserInfo/UserInfo';

export default {
  Default, Page1, Page2, Page3, Page4, Home, Counter, UserInfo
}