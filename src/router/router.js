import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { UserInfo, Counter, Home, Page1, Page2, Page3, Page4 } from '../pages/index';

const getRouters = () => (
  <Router>
    <div>
      <ul>
        <li> <Link to="/">首页</Link> </li>
        <li> <Link to="/page1">page1</Link> </li>
        <li> <Link to="/page2">page2</Link> </li>
        <li> <Link to="/page3">page3</Link> </li>
        <li> <Link to="/page4">page4</Link> </li>
        <li> <Link to="/counter">Counter</Link> </li>
        <li> <Link to="/userinfo">UserInfo</Link> </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path='/page4' component={Page4} />
        <Route path='/counter' component={Counter} />
        <Route path='/userinfo' component={UserInfo} />
      </Switch>

    </div>
  </Router>
);

export default getRouters;