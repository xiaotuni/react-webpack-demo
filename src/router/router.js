import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Home, Page1, Page2, Page3, Page4 } from '../pages/index';

const getRouters = () => (
  <Router>
    <div>
      <ul>
        <li> <Link to="/">首页</Link> </li>
        <li> <Link to="/page1">page1</Link> </li>
        <li> <Link to="/page2">page2</Link> </li>
        <li> <Link to="/page3">page3</Link> </li>
        <li> <Link to="/page4">page4</Link> </li>
      </ul>
      <Switch>
        <Route exact page='/' component={Home} />
        <Route page='/page1' component={Page1} />
        <Route page='/page2' component={Page2} />
        <Route page='/page3' component={Page3} />
        <Route page='/page4' component={Page4} />
      </Switch>
    </div>
  </Router>
);

export default getRouters;