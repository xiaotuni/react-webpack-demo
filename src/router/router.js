import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import pageComponent from 'containers';

import Bundle from './Bundle';
const {
  App, Default, UserInfo, Counter, Home, Page1, Page2, Page3, Page4, Es6, HybridJS,
} = pageComponent;
const AppCfg = require('../config');

const Loading = () => {
  return <div>Loading...</div>;
};

const CreateComponent = (component) => () => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component /> : <Loading />
    }
  </Bundle>
);

const getRouters = () => (
  <Router basename={AppCfg.app.BaseName}>
    <App>
      <Route exact path="/" component={CreateComponent(HybridJS)} />
      <Route path="/home" component={CreateComponent(Home)} />
      <Route path="/default" component={CreateComponent(Default)} />
      <Route path="/page1" component={CreateComponent(Page1)} />
      <Route path="/page2" component={CreateComponent(Page2)} />
      <Route path="/page3" component={CreateComponent(Page3)} />
      <Route path="/page4" component={CreateComponent(Page4)} />
      <Route path="/counter" component={CreateComponent(Counter)} />
      <Route path="/userinfo" component={CreateComponent(UserInfo)} />
      <Route path="/es6" component={CreateComponent(Es6)} />
      <Route path="/hybridJS" component={CreateComponent(HybridJS)} />
    </App>
  </Router>
);

export default getRouters;
