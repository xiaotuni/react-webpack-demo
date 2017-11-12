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

  async onClickLPush() {
    const { txtRedisKey } = this.refs;
    const key = txtRedisKey.value;
    const { onApiPost } = this.props;
    const data = { pValue: key };
    const result = await onApiPost('RedisLPUSH', ApiInfo.Redis.LPUSH, { data });
    console.log(result);
    txtRedisKey.value = new Date().getTime();
  }

  async onClickLPop() {
    const { onApiGet } = this.props;
    const result = await onApiGet('RedisLPOP', ApiInfo.Redis.LPOP, {});
    console.log(result);
  }

  async onClickRPush() {
    const { txtRedisKey } = this.refs;
    const key = txtRedisKey.value;
    const { onApiPost } = this.props;
    const data = { pValue: key };
    const result = await onApiPost('RedisRPUSH', ApiInfo.Redis.RPUSH, { data });
    console.log(result);
    txtRedisKey.value = new Date().getTime();
  }

  async onClickRPop() {
    const { onApiGet } = this.props;
    const result = await onApiGet('RedisRPOP', ApiInfo.Redis.RPOP, {});
    console.log(result);
  }

  async onClickLPUSHRPOP() {
    const { onApiGet } = this.props;
    const result = await onApiGet('RedisLPUSHRPOP', ApiInfo.Redis.LPUSHRPOP, {});
    console.log(result);
  }

  async onClickbrpoplpush() {
    const { onApiPost } = this.props;
    const result = await onApiPost('Redis_brpoplpush', ApiInfo.Redis.brpoplpush, {});
    console.log(result);
  }

  async inputOnClick() {
    const { txtRedis_Key, txtRedis_Value } = this.refs;
    const key = txtRedis_Key.value;
    const value = txtRedis_Value.value;
    const { onApiPost } = this.props;
    const data = { key, value };
    this.refs.txtRedisKey.value = key;
    const result = await onApiPost('RedisPost', ApiInfo.Redis.POST, { data });
    console.log(result);
    this.onClickGetRedis();
  }


  render() {
    const { RedisGet } = this.props;
    const { username, password } = RedisGet || {};
    return (
      <div className={comStyles.navbar + ' ' + styles.redisCss}>
        <input className={styles.inputInfo} type="text" ref={'txtRedisKey'} />
        <div className={styles.btns}>
          <div onClick={this.onClickGetRedis.bind(this)}>get redis</div>
          <div onClick={this.onClickLPush.bind(this)}>LPUSH</div>
          <div onClick={this.onClickLPUSHRPOP.bind(this)}>LPUSH RPOP</div>
          <div onClick={this.onClickbrpoplpush.bind(this)}>brpoplpush</div>
          <div onClick={this.onClickLPop.bind(this)}>LPOP</div>
          <div onClick={this.onClickRPush.bind(this)}>RPUSH</div>
          <div onClick={this.onClickRPop.bind(this)}>RPOP</div>
        </div>
        {username + ' ' + password}
        <div className={styles.addInfo}>
          <h2>Add Redis Info</h2>
          <div className={styles.row}>
            <div className={styles.tag}> Redis Key</div>
            <input type="text" ref="txtRedis_Key" />
          </div>
          <div className={styles.row}>
            <div className={styles.tag}>Redis Value</div>
            <textarea ref="txtRedis_Value" />
          </div>
          <div className={styles.submit}>
            <input type="submit" value="确定" onClick={this.inputOnClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
