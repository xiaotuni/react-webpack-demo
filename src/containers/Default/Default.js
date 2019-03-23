import React, { Component } from 'react';
import { DefHref } from '../../components';
// import { DefHref } from ''
const comStyles = require('styles/Common.scss');

const styles = require('./scss/Default.scss');

export default class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      org: '',
      result: []
    };
  }

  componentWillMount() {
    // const a = 123;
  }

  __HandlerBlue(source) {
    const { value } = source.target;
    this.state.org = value;
    this.state.orgArr = value.split('');
    this.state.isSuccess = false;
  }

  __HandlerBlue1(source) {
    const { value } = source.target;
    const tmpArr = value.split('');

    const { org, orgArr, result, isSuccess } = this.state;
    if (value.length !== orgArr.length) {
      alert('输入的值，与要比对的长度不至，请重新输入');
      return;
    }
    if (!!isSuccess) {
      return;
    }
    let A = 0;
    let B = 0;
    if (org === value) {
      A = 4;
    } else {
      for (let i = 0; i < orgArr.length; i += 1) {
        const org1 = orgArr[i];
        const tmp = tmpArr[i];
        if (org1 === tmp) {
          A += 1;
        }
        if (orgArr.indexOf(tmp) >= 0) {
          B += 1;
        }
      }
    }

    if (A === orgArr.length) {
      this.state.isSuccess = true;
      alert('你成功了');
    }

    B -= A;

    result.unshift({ index: result.length + 1, tmp: value, value: `${A}A${B >= 0 ? B : 0}B` });

    this.setState({ result });
  }

  __BuildHtml() {
    const { result } = this.state;
    return result.map((item) => {
      const { index, value, tmp } = item;
      return (
        <div key={index}>
          <span>{`次数:${index}-->`}</span> <span>{`输入的值：${tmp}`}</span>  <span>结果：{value}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={comStyles.navbar + ' ' + styles.defaultCss}>
        <div className={styles.demo}>
          <div className={styles.row}>
            <input ref="txt1" value="9876" onBlur={this.__HandlerBlue.bind(this)} />
          </div>

          <div className={styles.row}>
            <input ref="txt2" onBlur={this.__HandlerBlue1.bind(this)} />
          </div>

          <div>
            {
              this.__BuildHtml()
            }
          </div>
        </div>
        <DefHref />
      </div>
    );
  }
}
