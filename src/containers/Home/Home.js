import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Utility, Navbar } from 'components';

const styles = require('./scss/Home.scss');

export default class Home extends Component {
  static propTypes = {
    children: PropTypes.object,                                // 子项
    location: PropTypes.object,                                           // location信息
  };
  static contextTypes = {
    router: PropTypes.object.isRequired,
    // history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    Utility.setContent('___history___', this.context.router.history);
    const self = this;
    const UrlTitle = Utility.constItem.UrlTitle;
    this.context.router.history.listen((location, action) => {
      console.log('-----------home begin-------------');
      console.log('location is', location, 'action is', action);
      console.log('-----------home end---------------');
      const { pathname } = location;
      if (UrlTitle && UrlTitle[pathname]) {
        self.state.UrlTitle = UrlTitle[pathname];
        self.__UpdateRender();
      }
    });
  }
  __UpdateRender() {
    this.setState({ __CURRENT_TIME_: new Date() });
  }

  __HandlerJudgPage() {
    Utility.toPage('userinfo');
  }

  render() {
    const { UrlTitle } = this.state;
    const { Title } = UrlTitle || {};

    return (
      <div className={styles.homeCss}>
        <Navbar Title={Title} />

      </div>
    );
  }
}
