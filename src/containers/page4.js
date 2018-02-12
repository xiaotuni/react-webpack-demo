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
    const { DataSource } = this.state;
    DataSource.push({ id: DataSource.length + 1, CurrentDate: new Date(), Name: '哈哈__' });
    this.setState({ CurrentDate: new Date() });
  }

  btnArrayObjectSort() {
    const ArrayObj = [
      { Count: 7, name: 1 },
      { Count: 4, name: 2 },
      { Count: 245, name: 3 },
      { Count: 1, name: 4 },
      { Count: 2, name: '张三5' },
      { Count: 21, name: '张6三' },
      { Count: 80, name: '张8三' },
    ];

    const sortResult = ArrayObj.sort((a, b) => a.Count > b.Count);
    console.log(JSON.stringify(sortResult));
    console.log('-----------排序--------------');
    const aaaList = [];
    for (let i = 0; i < 10000; i += 1) {
      aaaList.push(Math.round(Math.random() * 100));
    }
    const _BeginDate = new Date().getTime();
    const aaaCountInfo = {};
    aaaList.forEach((key) => {
      if (!aaaCountInfo[key]) {
        aaaCountInfo[key] = { Count: 0, Key: key, name: '张——' };
      }
      aaaCountInfo[key].Count += 1;
    });
    const aaaValue = Object.values(aaaCountInfo);
    const CountResult = aaaValue.sort((a, b) => a.Count - b.Count);
    console.log('------------------------');
    console.log(JSON.stringify(CountResult));
    console.log('----------开始--------', new Date().getTime() - _BeginDate);

    this.state.index = 0;
    this.setState({ index: this.state.index += 1 });
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
