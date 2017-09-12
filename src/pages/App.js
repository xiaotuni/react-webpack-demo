import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({ appName: state.appName });

class App extends Component {
  static propTypes = {
    children: PropTypes.object,                                // 子项
    location: PropTypes.object,                                           // location信息
  };

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    history: PropTypes.object,
  }

  componentWillMount() {
    console.log('-------app mount-------');
    this.context.router.history.listen((location, action) => {
      console.log('-----------history listen------');
      console.log(location, action);
    });
  }

  render() {
    return (
      <div >
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);