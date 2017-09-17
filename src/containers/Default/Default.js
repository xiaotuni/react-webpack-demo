import React, { Component } from 'react';
import { DefHref } from 'components';
const comStyles = require('styles/Common.scss');

const styles = require('./scss/Default.scss');

export default class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // const a = 123;
  }
  render() {
    return (
      <div className={comStyles.navbar + ' ' + styles.defaultCss}>
        <DefHref />
      </div>
    );
  }
}
