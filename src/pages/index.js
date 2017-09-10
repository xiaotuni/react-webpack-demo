// export Page1 from './page1';
// export Page2 from './page2';
// export Page3 from './page3';
// export Page4 from './page4';
// export Home from './Home/Home';
// export Counter from './Counter/Counter';
// export UserInfo from './UserInfo/UserInfo';


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