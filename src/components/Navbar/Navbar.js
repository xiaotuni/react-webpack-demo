import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Utility } from 'components';
const styles = require('./scss/Navbar.scss');

export default class Navbar extends Component {
  static propTypes = {
    Title: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.__HandlerOnClickLeft = this.__HandlerOnClickLeft.bind(this);
  }

  __HandlerOnClickLeft() {
    Utility.$goBack();
  }

  render() {
    const { Title } = this.props;
    return (
      <div className={styles.navbarCss}>
        <div className={styles.left}>
          <div onClick={this.__HandlerOnClickLeft} />
        </div>
        <div className={styles.center}>{Title || '这是标题'}</div>
        <div className={styles.right} />
      </div>
    );
  }
}
