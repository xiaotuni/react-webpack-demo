import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as cActions from 'reducers/counter';
import { Utility } from 'components';
const comStyles = require('styles/Common.scss');

@connect((state) => ({ counter: state.counter }), { ...cActions })
export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    reset: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { increment, decrement, reset } = this.props;
    return (
      <div>
        <div className={comStyles.btns}>
          <button onClick={() => Utility.toPage('userinfo')}>go to userinfo</button>
          <button onClick={() => Utility.$goBack()}>go back</button>
        </div>
        <div>当前计数为(显示redux计数):</div>
        <div>
          <button onClick={() => {
            console.log('+');
            increment();
          }}> + 123</button>
          <span> ___</span>

          <button onClick={() => {
            console.log('-');
            decrement();
          }}> - </button>
          <span> ___</span>
          <button onClick={() => {
            console.log('reset');
            reset();
          }}>reset</button>

        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch(increment);
//     },
//     decrement: () => {
//       dispatch(decrement);
//     },
//     reset: () => {
//       dispatch(reset);
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
