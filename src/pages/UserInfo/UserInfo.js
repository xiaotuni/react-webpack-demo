import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserInfo } from "actions/userInfo";
import { Utility } from 'components';

require('./UserInfo.css');


class UserInfo extends Component {
  static propTypes = {
    userInfo: PropTypes.object,
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
    // history: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  __HandlerGoBack() {
    // this.context.router.history.goBack();
    Utility.$goBack();
  }

  render() {
    const styles = require('./ui.scss');
    const { userInfo, isLoading, errorMsg } = this.props.userInfo;
    return (
      <div className="userInfoCss">
        <div className={styles.a} onClick={this.__HandlerGoBack.bind(this)}>
          哈哈!!看看了
        </div>
        <div className="img01"></div>
        <div>
          <button onClick={() => {
            this.props.getUserInfo().then((data) => {
              console.log(data)
            }, (err) => {
              console.log(err);
            });
          }}>请求用户信息</button>
        </div>
        <div>
          {errorMsg}
        </div>

        {
          !isLoading &&
          <div>
            <p>用户信息</p>
            <p>用户名称:{userInfo && userInfo.name}</p>
            <p>介绍:{userInfo && userInfo.intro}</p>
          </div>
        }

      </div>
    );
  }
}

export default connect((state) => ({ userInfo: state.userInfo }), { getUserInfo })(UserInfo);

