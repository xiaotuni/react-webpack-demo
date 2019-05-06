import React, { Component } from 'react';
import { Utility } from 'components';
import PropTypes from 'prop-types';

const styles = require('./scss/ListItem.scss');

export default class ListItem extends Component {
  static propTypes = {
    DataSource: PropTypes.array,
    onDelete: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickSelectItem(item, index) {
    console.log(item);
    const { onDelete } = this.props;
    if (onDelete) {
      onDelete(item, index);
    }
  }
  
  componentDidCatch() {
  }

  BuildHtml() {
    const { DataSource } = this.props;
    if (!Utility.isArray(DataSource)) {
      return null;
    }
    return DataSource.map((item, index) => {
      const { CurrentDate } = item;
      return (<div key={index} className={styles.row} onClick={this.onClickSelectItem.bind(this, item, index)}>
        <div className={styles.index}>{item.id}</div>
        <div className={styles.name}>{item.Name}</div>
        <div className={styles.date}>{CurrentDate.toLocaleDateString() + ' ' + CurrentDate.toLocaleTimeString()}</div>
      </div>);
    });
  }

  render() {
    return (
      <div className={styles.listItemCss}>
        {
          this.BuildHtml()
        }
      </div>
    );
  }
}
