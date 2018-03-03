import React, { Component } from 'react';
import PropTypes from 'prop-types';
const comStyles = require('styles/Common.scss');
const styles = require('./scss/HybridJS.scss');

import { Input, Button } from 'components';

export default class HybridJS extends Component {
  static propTypes = {
    children: PropTypes.object,                                // 子项
    location: PropTypes.object,                                           // location信息
  };
  static contextTypes = {
    router: PropTypes.object.isRequired,
    // history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.state.IsMount = true;
  }

  componentWillUnmount() {
    delete this.state.IsMount;
  }

  onClick = (type, msg) => {
    const { Android } = window;
    if (!Android) {
      return;
    }
    console.log('-------------', type, '------------------');
    console.log(type);
    console.log('-------------', type, '------------------');
    if (Android[type]) {
      const result = !msg ? Android[type]() : Android[type](msg);
      if (result) {
        console.log(type, result);
      }
    }
  }
  onClick1() {
    console.log('==========getVersion=============');
    // window.Android.showToast('toast');
    const version = window.Android.getVersion();
    console.log(version);
    console.log('==========getVersion=============');
  }

  onClick_GetAddress() {
    console.log('========ipAddress===============');
    const ipAddress = window.Android.getAddress();
    console.log(ipAddress);
    console.log('========ipAddress===============');
  }

  onClick_ScanQRCode() {
    console.log('========onClick_ScanQRCode===============');
    const getQRCode = (result) => {
      console.log(result);
    };
    window.getQRCode = getQRCode;
    const ipAddress = window.Android.qcCode('getQRCode');
    console.log(ipAddress);
    console.log('========onClick_ScanQRCode===============');
  }

  updateRender() {
    if (!!this.state.IsMount) {
      this.setState({ __CURRENT_TIME_: new Date() });
    }
  }
  // <div className={comStyles.btn} onClick={this.onClick1.bind(this)}>toast</div>

  render() {
    return (
      <div className={comStyles.navbar + ' ' + styles.hybridJSCss}>
        <div className={comStyles.btns} >
          <div className={comStyles.btn} onClick={this.onClick.bind(this, 'showToast', '瞧瞧' + new Date().getTime())}>showToast</div>
          <div className={comStyles.btn} onClick={this.onClick1.bind(this, 'getVersion')}>getVersion</div>
          <div className={comStyles.btn} onClick={this.onClick_GetAddress.bind(this)}>getAddress</div>
          <div className={comStyles.btn} onClick={this.onClick_ScanQRCode.bind(this)}>ScanQRCode</div>
        </div>
        <div>
          <Input />
        </div>
        <div>
          <Button>antd_button_click</Button>
        </div>
      </div>
    );
  }
}
