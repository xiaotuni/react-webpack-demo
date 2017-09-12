import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import pageComponent from '../pages/index';
const { App, UserInfo, Counter, Home, Page1, Page2, Page3, Page4 } = pageComponent;
import { withRouter } from 'react-router-dom';

import Bundle from './Bundle';


const Loading = () => {
  return <div>Loading...</div>;
}

const CreateComponent = (component) => () => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component /> : <Loading />
    }
  </Bundle>
)

const getRouters = () => (
  <App>
    <BrowserRouter>
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
        <Route path="/" component={CreateComponent(Home)} />
        <Switch>
          <Route exact path="/" component={CreateComponent(Home)} />
          <Route path="/page1" component={CreateComponent(Page1)} />
          <Route path="/page2" component={CreateComponent(Page2)} />
          <Route path="/page3" component={CreateComponent(Page3)} />
          <Route path='/page4' component={CreateComponent(Page4)} />
          <Route path='/counter' component={CreateComponent(Counter)} />
          <Route path='/userinfo' component={CreateComponent(UserInfo)} />
        </Switch>
      </div>
    </BrowserRouter>
  </App>
);

export default getRouters;

{/* <Route path="/page1" component={CreateComponent(Page1)} />
<Route path="/page2" component={CreateComponent(Page2)} />
<Route path="/page3" component={CreateComponent(Page3)} />
<Route path='/page4' component={CreateComponent(Page4)} />
<Route path='/counter' component={CreateComponent(Counter)} />
<Route path='/userinfo' component={CreateComponent(UserInfo)} /> */}
