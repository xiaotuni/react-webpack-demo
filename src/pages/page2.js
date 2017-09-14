import React, { Component } from 'react';

export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        哈哈这是Page2
        <div>
          哈哈，看看噘adadfsaaaa
        </div>
        {
          this.state.count
        }
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>添加 </button>
      </div>
    );
  }
}