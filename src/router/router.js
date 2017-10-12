import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Utility, Navbar } from 'components';
import pageComponent from 'containers';
const {
  Default, UserInfo, Counter, Home, Page1, Page2, Page3, Page4
} = pageComponent;
const routerCss = require('./router.scss');
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

const getTransitionsName = (isReturn, styles) => {
  const __IsGoback = Utility.getContent(Utility.constItem.KeyGoBack);
  const __tranName = {};
  if (!!__IsGoback) {
    __tranName.enter = styles.spEnterReturn;
    __tranName.enterActive = styles.spEnterActiveReturn;
    __tranName.leave = styles.spLeaveReturn;
    __tranName.leaveActive = styles.spLeaveActiveReturn;
    __tranName.appear = styles.spAppearReturn;
    __tranName.appearActive = styles.spAppearActiveReturn;
  } else {
    __tranName.enter = styles.spEnter;
    __tranName.enterActive = styles.spEnterActive;
    __tranName.leave = styles.spLeave;
    __tranName.leaveActive = styles.spLeaveActive;
    __tranName.appear = styles.spAppear;
    __tranName.appearActive = styles.spAppearActive;
  }
  return __tranName;
};
const __timeout = 500;

const getRouters = () => (
  <Router basename={AppCfg.app.BaseName}>
    <div className={routerCss.appContent}>
      <Route path="/" component={CreateComponent(Home, 'Home')} />
      <Route
        basename={AppCfg.app.BaseName}
        render={({ location }) => (
          <CSSTransitionGroup
            component="div"
            transitionName={getTransitionsName(false, routerCss)}
            transitionAppear
            transitionAppearTimeout={__timeout}
            transitionEnterTimeout={__timeout}
            transitionLeaveTimeout={__timeout}>
            <Switch key={location.key} location={location}>
              <Route exact path="/" component={CreateComponent(Default)} />
              <Route path="/page1" component={CreateComponent(Page1)} />
              <Route path="/page2" component={CreateComponent(Page2)} />
              <Route path="/page3" component={CreateComponent(Page3)} />
              <Route path="/page4" component={CreateComponent(Page4)} />
              <Route path="/counter" component={CreateComponent(Counter)} />
              <Route path="/userinfo" component={CreateComponent(UserInfo)} />
            </Switch>
          </CSSTransitionGroup>
        )} />
    </div>
  </Router>
);

export default getRouters;


// <Switch>
// <Route exact path="/" component={CreateComponent(Default)} />
// <Route path="/page1" component={CreateComponent(Page1)} />
// <Route path="/page2" component={CreateComponent(Page2)} />
// <Route path="/page3" component={CreateComponent(Page3)} />
// <Route path="/page4" component={CreateComponent(Page4)} />
// <Route path="/counter" component={CreateComponent(Counter)} />
// <Route path="/userinfo" component={CreateComponent(UserInfo)} />
// </Switch>
