import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ItemLeftRight.scss';
import { Utility, Icon } from '..';

/**
 * <ItemLeftRight 
 *   Placeholder="",
 *   LeftText="",
 *   DataType="",
 *   DataSource = [{ Title: '等额本息还款', Value: '1' }],
 *   DataSourceType = "radio|checked",
 *   /> 
 *
 * @export
 * @class ItemLeftRight
 * @extends {Component}
 */
export default class ItemLeftRight extends Component {
  static propTypes = {
    OnChange: PropTypes.func,
    LeftText: PropTypes.string,
    Placeholder: PropTypes.string,
    RightText: PropTypes.string,
    DataType: PropTypes.string,
    DataSource: PropTypes.array,
    DataSourceType: PropTypes.string,
    DefaultValue: PropTypes.string,
    Disable: PropTypes.bool,
    MaxValue: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = { DataSourceTypeMap: {}, DefaultValue: props.DefaultValue };
  }

  componentWillMount() {
    this.state.isMount = true;
  }

  componentDidMount() {
    const { RightText, DataType } = this.props;
    const { txtValue } = this.refs;
    if (txtValue) {
      if (RightText) {
        txtValue.value = RightText;
      }
      if (DataType) {
        txtValue.type = DataType;
      }
    }
  }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log(nextProps);
  // }

  componentWillUnmount() {
    delete this.state.isMount;
  }

  UpdateRender() {
    if (!this.state.isMount) {
      return;
    }
    this.setState({ CURRENT_TIME: new Date().getTime() });
  }

  HandlerOnChange(event, data) {
    const { OnChange } = this.props;
    if (!OnChange) {
      return;
    }
    const { target } = event || {};
    const { value } = target || {};
    OnChange(value || data);
  }

  HandlerOnSelect(item) {
    const { DataSourceType } = this.props;
    const { DataSourceTypeMap } = this.state;
    if (DataSourceType === 'radio') {
      if (DataSourceTypeMap.Value === item.Value) {
        return;
      }
      this.state.DataSourceTypeMap = item;
    } else if (DataSourceType === 'checked') {
      if (DataSourceTypeMap[item.Value]) {
        delete DataSourceTypeMap[item.Value];
      } else {
        DataSourceTypeMap[item.Value] = item;
      }
    }
    this.HandlerOnChange(null, this.state.DataSourceTypeMap);
    this.UpdateRender();
  }

  BuildHtml() {
    const { DataSource, Placeholder, DataSourceType, Disable, RightText } = this.props;
    if (!Utility.isArray(DataSource)) {
      if (!!Disable) {
        return (<div className={styles.rText}>{RightText}</div>);
      }
      return <input ref="txtValue" placeholder={Placeholder} defaultValue={RightText} onChange={this.HandlerOnChange.bind(this)} onBlur={this.HandlerOnChange.bind(this)} />;
    }
    const { DataSourceTypeMap } = this.state;
    return (
      <div className={`${styles[DataSourceType]}`}>
        {
          DataSource.map((item, index) => {
            const { Title, Value } = item;
            const type = DataSourceType === 'radio' ? (DataSourceTypeMap && item && DataSourceTypeMap.Value === Value
              ? 'iconCheckboxSelect' : 'iconCheckboxUnSelect') : (DataSourceTypeMap[Value] ? 'iconCheckboxSelect' : 'iconCheckboxUnSelect');
            return (
              <div className={styles.item} key={index} onClick={this.HandlerOnSelect.bind(this, item)}>
                <Icon IsHidePadding Type={`${type}`} />
                <span>
                  {Title}
                </span>
              </div>
            );
          })
        }
      </div>
    );
  }

  render() {
    const { LeftText } = this.props;
    return (
      <div className={styles.itemLeftRightCss}>
        <div className={styles.left}>{LeftText}</div>
        <div className={styles.placeHolder}>
          {
            this.BuildHtml()
          }
        </div>
      </div>
    );
  }
}
