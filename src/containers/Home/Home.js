import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Utility } from 'components';

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
    this.state.IsMount = true;
  }

  componentWillUnmount() {
    delete this.state.IsMount;
    console.log('-------home-----component Will Umount');
  }

  __UpdateRender() {
    if (!!this.state.IsMount) {
      this.setState({ __CURRENT_TIME_: new Date() });
    }
  }

  __HandlerJudgPage() {
    Utility.toPage('userinfo');
  }
  render() {
    // const { UrlTitle } = this.state;
    // const { Title } = UrlTitle || {};
    // const __Flag = 0;

    return (
      <div className={styles.homeCss}>
        {}
      </div>
    );
  }
}
// {
//   __Flag === 2 && <Navbar Title={Title} />
// }
