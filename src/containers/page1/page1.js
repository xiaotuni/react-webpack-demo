import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Utility, ApiInfo } from 'components';
import * as CommonActions from 'reducers/reduxCommon';
const comStyles = require('styles/Common.scss');
const styles = require('./page.scss');

@connect((state) => ({
  UserList: state.Common.UserList,
  Demo: state.Common.Demo,
  MapPlacelist: state.Common.MapPlacelist,
}), { ...CommonActions })
export default class Page1 extends Component {
  static propTypes = {
    UserList: PropTypes.any,
    Demo: PropTypes.any,
    MapPlacelist: PropTypes.any,
    onApiGet: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  onCallApi() {

  }


  render() {
    const { UserList } = this.props;
    return (
      <div className={comStyles.navbar + ' ' + styles.page1Css}>
        <div className={comStyles.btns}>
          <button onClick={() => Utility.toPage('page2')}>go to page2</button>
          <button onClick={() => Utility.$goBack()}>go back</button>
          <button onClick={this.onCallApi.bind(this)}>call api</button>
        </div>
        acdef
        {
          Utility.isArray(UserList) && UserList.map((item, index) => {
            const {
              address, age, cityname, username
            } = item;
            return (
              <div key={index} className={styles.row}>
                <div className={styles.username}>{username}</div>
                <div className={styles.username}>{cityname}</div>
                <div className={styles.username}>{age}</div>
                <div className={styles.username}>{address}</div>
              </div>
            );
          })
        }

      </div>
    );
  }
}
