import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import pageComponent from 'containers';
const {
  App, Default, UserInfo, Counter, Home, page1, page2, page3, page4, Es6,
} = pageComponent;
const AppCfg = require('../config');
const { isProduction } = AppCfg;
import Bundle from './Bundle';

const Loading = () => {
  return <div>加载中...</div>;
};
// args = {history, location, match} 三个参数
const CreateComponent = (component) => (args) => (
  <Bundle load={component} isProduction={isProduction} {...args}>
    {
      (Component) => Component ? <Component /> : <Loading />
    }
  </Bundle>
);

const getRouters = () => (
  <Router basename={AppCfg.app.BaseName}>
    <App>
      <Route exact path="/" component={CreateComponent(Default)} />
      <Route path="/default" component={CreateComponent(Default)} />
      <Route path="/home" component={CreateComponent(Home)} />
      <Route path="/page1" component={CreateComponent(page1)} />
      <Route path="/page2" component={CreateComponent(page2)} />
      <Route path="/page3" component={CreateComponent(page3)} />
      <Route path="/page4" component={CreateComponent(page4)} />
      <Route path="/counter" component={CreateComponent(Counter)} />
      <Route path="/userinfo" component={CreateComponent(UserInfo)} />
      <Route path="/es6" component={CreateComponent(Es6)} />
    </App>
  </Router>
);

export default getRouters;

// <Route path="/default" component={Default} />
// <Route path="/home" component={Home} />
// <Route path="/page1" component={page1} />
// <Route path="/page2" component={page2} />
// <Route path="/page3" component={page3} />
// <Route path="/page4" component={page4} />
// <Route path="/counter" component={Counter} />
// <Route path="/userinfo" component={UserInfo} />
// <Route path="/es6" component={Es6} />
