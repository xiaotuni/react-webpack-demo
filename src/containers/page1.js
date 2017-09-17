import React, { Component } from 'react';
import { Utility } from 'components';

const comStyles = require('styles/Common.scss');
const styles = require('./page.scss');

export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={comStyles.navbar + ' ' + styles.page1Css}>
        <div className={comStyles.btns}>
          <button onClick={() => Utility.toPage('page2')}>go to page2</button>
          <button onClick={() => Utility.$goBack()}>go back</button>
        </div>
        哈哈这是Page1

      </div>
    );
  }
}
