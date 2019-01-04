import React, { Component } from 'react';
import { Utility, ListItem } from 'components';
const comStyles = require('styles/Common.scss');
const styles = require('./page.scss');

export default class Page4 extends Component {
  constructor(props) {
    super(props);
    this.state = { DataSource: [] };
  }

  componentWillMount() {
  }
  componentDidMount() {
  }

  onListItemDelete(item, index) {
    this.state.DataSource.splice(index, 1);
    this.setState({ CurrentDate: new Date() });
  }

  componentDidCatch() {
  }

  btnUpdateDate() {
    // new Date().toLocaleTimeString();
    const { DataSource } = this.state;
    DataSource.push({ id: DataSource.length + 1, CurrentDate: new Date(), Name: '哈哈__' });

    this.setState({ CurrentDate: new Date() });
  }
  btnArrayObjectSort() {
  }

  render() {
    const { CurrentDate, DataSource, index } = this.state;
    return (
      <div className={comStyles.navbar + ' ' + styles.page4Css}>
        <div className={comStyles.btns}>
          <button onClick={() => Utility.toPage('counter')}>go to counter</button>
          <button onClick={() => Utility.$goBack()}>go back</button>
        </div>

        <div className={comStyles.btns}>
          <div className={comStyles.btn} onClick={this.btnUpdateDate.bind(this)}>单击事件</div>
          <div className={comStyles.btn} onClick={this.btnArrayObjectSort.bind(this)}>数组排序</div>

        </div>
        <div className={styles.content}>{index}{CurrentDate && CurrentDate.toLocaleTimeString()}</div>
        <ListItem DataSource={DataSource} onDelete={this.onListItemDelete.bind(this)} />
      </div>
    );
  }
}
