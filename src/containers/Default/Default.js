import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Utility, Navbar, DefHref } from 'components';

const styles = require('./scss/Default.scss');

export default class Default extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const a = 123;
  }
  render() {
    return (
      <div className={styles.defaultCss}>
        <DefHref />
      </div>
    );
  }
}