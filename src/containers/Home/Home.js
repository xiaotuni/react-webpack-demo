import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  }

  componentDidMount() {
    this.state.IsMount = true;
  }

  componentWillUnmount() {
    delete this.state.IsMount;
  }

  __UpdateRender() {
    if (!!this.state.IsMount) {
      this.setState({ __CURRENT_TIME_: new Date() });
    }
  }

  render() {
    return (
      <div className={styles.homeCss}>
        {}
      </div>
    );
  }
}
