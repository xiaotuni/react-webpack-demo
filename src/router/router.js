import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Utility, Navbar } from 'components';
import pageComponent from 'containers';
const {
  App, Default, UserInfo, Counter, Home, Page1, Page2, Page3, Page4, Es6,
} = pageComponent;
const AppCfg = require('../config');

import Bundle from './Bundle';


const Loading = () => {
  return <div>Loading...</div>;
};

const getTitle = () => {
  const title = Utility.getContent('__URL_TITLE_INFO_');
  if (title) {
    return title.Title;
  }
  return '默认标题';
};

const CreateComponent = (component, name) => () => (
  <Bundle load={component}>
    {
      (Component) => Component ? <div>
        {
          name !== 'Home' && <Navbar Title={getTitle()} />
        }
        <Component /></div> : <Loading />
    }
  </Bundle>
);

const getRouters = () => (
  <Router basename={AppCfg.app.BaseName}>
    <App>
      <Route exact path="/" component={CreateComponent(Default)} />
      <Route path="/home" component={CreateComponent(Home, 'Home')} />
      <Route path="/page1" component={CreateComponent(Page1)} />
      <Route path="/page2" component={CreateComponent(Page2)} />
      <Route path="/page3" component={CreateComponent(Page3)} />
      <Route path="/page4" component={CreateComponent(Page4)} />
      <Route path="/counter" component={CreateComponent(Counter)} />
      <Route path="/userinfo" component={CreateComponent(UserInfo)} />
      <Route path="/es6" component={CreateComponent(Es6)} />
    </App>
  </Router>
);

export default getRouters;
