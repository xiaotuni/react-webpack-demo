import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Utility, Navbar } from 'components';

class Bundle extends Component {
  static propTypes = {
    load: PropTypes.any,
    isProduction: PropTypes.bool,
    children: PropTypes.any,
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
    if (title) {
      return title.Title;
    }
    return '默认标题';
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
        {
          this.props.children(this.state.mod)
        }
      </div>
    );
  }
}

export default Bundle;
