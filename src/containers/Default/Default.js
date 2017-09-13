import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Utility, Navbar, DefHref } from 'components';

const styles = require('./scss/Default.scss');

export default class Default extends Component {
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
 
  }
   render() {
    return (
      <div className={styles.defaultCss}>
        <DefHref />
      </div>
    );
  }
}