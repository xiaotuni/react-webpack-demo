import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import pageComponent from 'containers';
const { App, Default, } = pageComponent;
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

console.log(pageComponent);

const getRouters = () => (
  <Router basename={AppCfg.app.BaseName}>
    <App>
      <Route exact path="/" component={CreateComponent(Default)} />
      {
        Object.keys(pageComponent).map((key, index) => {
          if (key === 'App') {
            return '';
          }
          return (<Route key={index} path={`/${key}`} component={CreateComponent(pageComponent[key])} />);
        })
      }
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
