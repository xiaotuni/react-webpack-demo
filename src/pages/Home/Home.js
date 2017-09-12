import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = require('./scss/Home.scss');

export default class Home extends Component {
  static propTypes = {
    children: PropTypes.object,                                // 子项
    location: PropTypes.object,                                           // location信息
  };

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    // history: PropTypes.object,
  }
  __HandlerJudgPage() {
    console.log('-----------');
    this.context.router.history.push('/userinfo');
  }

  render() {
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