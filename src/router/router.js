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

const getRouters = () => (
  <Router basename={AppCfg.app.BaseName}>
    <App >
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
