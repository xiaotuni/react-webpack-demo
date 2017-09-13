import React, { Component } from 'react';
import { Utility } from 'components';
const comStyles = require('styles/Common.scss');

export default class Page3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={comStyles.btns}>
          <button onClick={() => Utility.toPage('page4')}>go to page4</button>
          <button onClick={() => Utility.$goBack()}>go back</button>
        </div>
        哈哈这是Page3
      </div>
    );
  }
}