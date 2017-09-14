import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import pageComponent from 'containers';
const { Default, UserInfo, Counter, Home, Page1, Page2, Page3, Page4 } = pageComponent;

import Bundle from './Bundle';


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
  <Router>
    <div>
      <Route path="/" component={CreateComponent(Home)} />
      <Switch>
        <Route exact path='/' component={CreateComponent(Default)} />
        <Route path="/page1" component={CreateComponent(Page1)} />
        <Route path="/page2" component={CreateComponent(Page2)} />
        <Route path="/page3" component={CreateComponent(Page3)} />
        <Route path='/page4' component={CreateComponent(Page4)} />
        <Route path='/counter' component={CreateComponent(Counter)} />
        <Route path='/userinfo' component={CreateComponent(UserInfo)} />
      </Switch>
    </div>
  </Router>
);

export default getRouters;