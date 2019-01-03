import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Utility, Navbar } from 'components';

const styles = require('styles/Common.scss');

class Bundle extends Component {
  static propTypes = {
    load: PropTypes.any,
    isProduction: PropTypes.bool,
    children: PropTypes.any,
    location: PropTypes.any,
  }
  constructor(props) {
    super(props);
    this.state = {
      mod: null // short for "module" but that's keyword in js,so "mod"
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  getTitle() {
    const title = Utility.getContent('__URL_TITLE_INFO_');
    const _value = title ? title.Title : '默认标题';

    document.title = _value;
    return _value;
  }

  load(props) {
    const { load, isProduction } = props;
    if (!!isProduction) {
      this.setState({ mod: null });
      props.load((mod) => {
        // handle both es import and cjs
        this.setState({ mod: mod.default ? mod.default : mod });
      });
    } else {
      this.setState({ mod: load });
    }
  }

  render() {
    return (
      <div>
        <Navbar Title={this.getTitle()} />
        <div className={styles.navbar}>
          {
            this.props.children(this.state.mod)
          }
        </div>
      </div>
    );
  }
}

export default Bundle;
