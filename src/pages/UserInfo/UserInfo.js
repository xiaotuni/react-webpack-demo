import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserInfo } from "actions/userInfo";

require('./UserInfo.css');


class UserInfo extends Component {
  static propTypes = {
    userInfo: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { userInfo, isLoading, errorMsg } = this.props.userInfo;
    return (
      <div className="userInfoCss">
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

