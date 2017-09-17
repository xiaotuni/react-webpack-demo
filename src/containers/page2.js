import React, { Component } from 'react';
import { Utility } from 'components';
const comStyles = require('styles/Common.scss');

export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div className={comStyles.navbar}>
        <div className={comStyles.btns}>
          <button onClick={() => Utility.toPage('page3')}>go to page3</button>
          <button onClick={() => Utility.$goBack()}>go back</button>
        </div>
        哈哈这是Page2
        <div>
          {
            this.state.count
          }
        </div>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }); }}> 添加 </button>
      </div>
    );
  }
}
