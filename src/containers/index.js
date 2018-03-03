import App from './App/App';
import Default from 'bundle-loader?lazy&name=default!containers/Default/Default';
import Page1 from 'bundle-loader?lazy&name=page1!containers/page1';
import Page2 from 'bundle-loader?lazy&name=page2!containers/page2';
import Page3 from 'bundle-loader?lazy&name=page3!containers/page3';
import Page4 from 'bundle-loader?lazy&name=page4!containers/page4';
import Home from 'bundle-loader?lazy&name=home!containers/Home/Home';
import Counter from 'bundle-loader?lazy&name=counter!containers/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!containers/UserInfo/UserInfo';
import Es6 from 'bundle-loader?lazy&name=es6!containers/Es6/Es6';
import HybridJS from 'bundle-loader?lazy&name=hybridJS!containers/HybridJS/HybridJS';
// import Default from './Default/Default';
// import Page1 from './page1';
// import Page2 from './page2';
// import Page3 from './page3';
// import Page4 from './page4';
// import Home from './Home/Home';
// import Counter from './Counter/Counter';
// import UserInfo from './UserInfo/UserInfo';
// import Es6 from './Es6/Es6';

export default {
  App, Default, HybridJS, Page1, Page2, Page3, Page4, Home, Counter, UserInfo, Es6
};
