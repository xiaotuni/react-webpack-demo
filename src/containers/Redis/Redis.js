import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Utility, ApiInfo } from 'components';
import * as CommonActions from 'reducers/reduxCommon';
const comStyles = require('styles/Common.scss');
const styles = require('./scss/Redis.scss');

@connect(
  (state) => ({
    RedisGet: state.Common.RedisGet,
  }),
  { ...CommonActions }
)
export default class Redis extends Component {
  static propTypes = {
    RedisGet: PropTypes.object,
    onApiGet: PropTypes.func,
    onApiPost: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {};
    console.log(ApiInfo.Redis);
  }

  async onClickGetRedis() {
    console.log('get redis data');
    const { onApiGet } = this.props;
    if (!Utility.isFunction(onApiGet)) {
      console.log('onApiGet is not function');
    }
    //
    const { txtRedisKey } = this.refs;

    const params = { key: txtRedisKey.value };
    const result = await onApiGet('RedisGet', ApiInfo.Redis.GET, { params });
    console.log(result);
  }

  render() {
    console.log('-----------------', new Date().getTime());
    const { RedisGet } = this.props;
    const { username, password } = RedisGet || {};
    return (
      <div className={comStyles.navbar + ' ' + styles.redisCss}>
        <input type="text" ref={'txtRedisKey'} />
        <div className={styles.btns}>
          <div onClick={this.onClickGetRedis.bind(this)}>get redis</div>
        </div>
        {username + ' ' + password}
      </div>
    );
  }
}
