import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Switch } from 'react-router-dom';
import { Utility } from 'components';
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
      this.context.router.history.listen((location, action) => {
        Utility.setContent(__IsGoBackKey, action === 'POP');
        const { pathname } = location;
        if (UrlTitle && UrlTitle[pathname]) {
          self.state.UrlTitle = UrlTitle[pathname];
          Utility.setContent('__URL_TITLE_INFO_', UrlTitle[pathname]);
        }
      });
    }
  }
  componentDidMount() {
    console.log('app did mount');
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

  getTitle() {
    const title = Utility.getContent('__URL_TITLE_INFO_');
    if (title) {
      return title.Title;
    }
    return '默认标题';
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
