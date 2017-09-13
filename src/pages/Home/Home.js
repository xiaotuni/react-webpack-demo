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
  }

  componentWillMount() {
    Utility.setContent('___history___', this.context.router.history);
  }

  __HandlerJudgPage() {
    console.log('-----------');
    Utility.toPage('userinfo');
    // this.context.router.history.push('/userinfo');
  }

  render() {
    console.log(this.props.children);
    console.log('-------- this.props.children---------');
    return (
      <div className={styles.homeCss}>
        <div>
          这是首页啦~~~asdaa
        </div>
        <div className={styles.btns}>
          <div className={styles.btn} onClick={this.__HandlerJudgPage.bind(this)}>跳转</div>
        </div>

      </div>
    );
  }
}