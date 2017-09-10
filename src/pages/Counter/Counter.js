import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, reset } from 'actions/counter';

class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    reset: PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { increment, decrement, reset } = this.props;
    return (
      <div>
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

const mapStateToProps = (state) => {
  return { counter: state.counter }
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment);
    },
    decrement: () => {
      dispatch(decrement);
    },
    reset: () => {
      dispatch(reset);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);