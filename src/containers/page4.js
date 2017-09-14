import React, { Component } from 'react';

import { Utility } from 'components';
const comStyles = require('styles/Common.scss');

export default class Page4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={comStyles.btns}>
          <button onClick={() => Utility.toPage('counter')}>go to counter</button>
          <button onClick={() => Utility.$goBack()}>go back</button>
        </div>
        哈哈这是Page4
      </div>
    );
  }
}
