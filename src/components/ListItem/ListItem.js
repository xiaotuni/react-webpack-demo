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
  componentWillMount() {
    console.log('-listitem-1----will mount------');
  }
  componentDidMount() {
    console.log('-listitem-2----did mount------');
  }
  componentWillReceiveProps(nextProps, nextState) {
    const { a } = nextState;
    if (a) {
      console.log(a);
    }
    console.log('-listitem-3----will receive props------------');
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { a } = nextContext;
    if (a) {
      console.log(a);
    }

    console.log('-listitem-4----should update-----------------');
    return true;
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    const { a } = nextContext;
    if (a) {
      console.log(a);
    }
    console.log('-listitem-5----will update-------------');
  }
  componentDidUpdate(prevProps, prevState) {
    const { a } = prevState;
    if (a) {
      console.log(a);
    }
    console.log('-listitem-6----did update-----------');
  }
  componentWillUnmount() {
    console.log('-listitem-7----will unmount-----------');
  }

  onClickSelectItem(item, index) {
    console.log(item);
    const { onDelete } = this.props;
    if (onDelete) {
      onDelete(item, index);
    }
  }

  componentDidCatch() {
    console.log('-listitem-----------did catch-------------');
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
