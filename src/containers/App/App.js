import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Switch } from 'react-router-dom';
import { Utility } from '../../components';
const styles = require('./scss/App.scss');

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,                                // 子项
    location: PropTypes.object,
    Title: PropTypes.string,
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const __key = Utility.constItem.KeyHistory;
    if (!Utility.getContent(__key)) {
      Utility.setContent(__key, this.context.router.history);
      const self = this;
      const { UrlTitle } = Utility.constItem;
      const __IsGoBackKey = Utility.constItem.KeyGoBack;
      const keyArray = [];
      this.context.router.history.listen((location, action) => {
        const { key } = location;
        if (key) {
          if (keyArray.includes(key)) {            // 返回操作
            keyArray.pop();
            Utility.setContent(__IsGoBackKey, true);
          } else {                                 // 前进操作
            keyArray.push(key);
            Utility.setContent(__IsGoBackKey, false);
          }
        } else {
          Utility.setContent(__IsGoBackKey, action === 'POP');
          if (action === 'POP') {
            keyArray.pop();
          }
        }
        const { pathname } = location;
        if (UrlTitle && UrlTitle[pathname]) {
          self.state.UrlTitle = UrlTitle[pathname];
          Utility.setContent('__URL_TITLE_INFO_', UrlTitle[pathname]);
        }
      });
    }

    this.context.router.history.block((location, action) => {
      // console.log('block:', action, location);
    });
  }

  componentDidMount() {
  }

  getTransitionsName() {
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
  }

  render() {
    const __timeout = 500;
    const { context } = this;
    const { router } = context || {};
    const { route } = router || {};
    const { location } = route || {};
    const { key } = location || {};

    return (
      <div className={styles.appContent}>
        <CSSTransitionGroup
          // component="div"  // 要不能界面上双会多一个div
          transitionName={this.getTransitionsName()}
          transitionAppear
          transitionAppearTimeout={__timeout}
          transitionEnterTimeout={__timeout}
          transitionLeaveTimeout={__timeout}>
          <Switch key={key} location={location}>
            {this.props.children}
          </Switch>
        </CSSTransitionGroup>
      </div>
    );
  }
}
