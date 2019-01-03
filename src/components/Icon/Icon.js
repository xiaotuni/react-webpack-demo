import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.scss';
import { Utility } from '..';

export default class Icon extends Component {
  static propTypes = {
    Type: PropTypes.string,
    Url: PropTypes.string,
    Size: PropTypes.string,                     // 大小 sm/md/l/xl/xxl
    Value: PropTypes.string,                    // 
    IsHidePadding: PropTypes.bool,              // 
    onClick: PropTypes.func,                    // 单击事件
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  HandlerOnClick() {
    const { onClick } = this.props;
    if (!Utility.isFunction(onClick)) {
      return;
    }
    onClick();
  }


  render() {
    const {
      Url, Type, Size, Value, IsHidePadding
    } = this.props;
    const typeStyle = Type && styles[Type] ? styles[Type] : styles.default;
    const sizeStype = Size && styles[Size] ? styles[Size] : '';
    return (
      <div className={`${styles.iconCss} ${IsHidePadding ? styles.hidePadding : ''}`} onClick={this.HandlerOnClick.bind(this)}>
        {
          Url ?
            <div style={{ backgroundImage: `url(${Url})` }} className={`${typeStyle} ${sizeStype} `} >
              <div>
                {Value}
              </div>
            </div>
            :
            <div className={`${typeStyle} ${sizeStype} `} >
              <div>
                {Value}
              </div>
            </div>
        }
      </div>
    );
  }
}
