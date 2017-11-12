import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Utility } from 'components';
const styles = require('./scss/DefHref.scss');

export default class DefHref extends Component {
  static propTypes = {
    Title: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  __HandlerToJump(url, key) {
    const a = key.substring(1, key.length);
    if (a) {
      Utility.toPage(a);
    }
  }

  __BuildHrefHtml() {
    return Object.keys(Utility.constItem.UrlTitle).map((key, index) => {
      const url = Utility.constItem.UrlTitle[key];
      return (
        <div key={index} className={styles.urlInfo}>
          <div className={styles.url} onClick={this.__HandlerToJump.bind(this, url, key)}>
            {index + 1}、
            {url.Title}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.defHrefCss}>
        <div className={styles.groups}>
          {
            this.__BuildHrefHtml()
          }
        </div>
      </div>
    );
  }
}
