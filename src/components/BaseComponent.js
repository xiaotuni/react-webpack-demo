import React from 'react';
import Utility from '../Common/Utility';
// import Utility from '.';

export default class BaseComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.state.isMount = true;
    Utility.printLog('componentWillMount');
  }
  componentDidMount() {
    Utility.printLog('componentDidMount');
  }

  // componentWillReceiveProps(nextProps, nextState) {
  //   Utility.printLog('componentWillReceiveProps');
  // }
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   Utility.printLog('shouldComponentUpdate');
  //   return true;
  // }
  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   Utility.printLog('componentWillUpdate');
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   Utility.printLog('componentDidUpdate');
  // }

  componentWillUnmount() {
    Utility.printLog('componentWillUnmount');
    delete this.state.isMount;
  }


  UpdateRender() {
    if (!this.state.isMount) {
      return;
    }
    this.setState({ CURRENT_TIME: new Date().getTime() });
  }

  GetCtrlHeight(ctrl) {
    if (!ctrl) {
      return 0;
    }
    const style = getComputedStyle(ctrl);
    const { height } = style || {};

    return parseInt(height || 0, 0);
  }
}
