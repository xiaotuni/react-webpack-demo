import React from 'react';
import { Router, Route } from 'react-router'
import pageComponent from '../pages/index';
const { UserInfo, Counter, Home, Page1, Page2, Page3, Page4 } = pageComponent;


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


const getRouters = [
  <Route exact path="/" component={CreateComponent(Home)} />,
  <Route path="/page1" component={CreateComponent(Page1)} />,
  <Route path="/page2" component={CreateComponent(Page2)} />,
  <Route path="/page3" component={CreateComponent(Page3)} />,
  <Route path='/page4' component={CreateComponent(Page4)} />,
  <Route path='/counter' component={CreateComponent(Counter)} />,
  <Route path='/userinfo' component={CreateComponent(UserInfo)} />,
];

export default getRouters;