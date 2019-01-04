import React from 'react';
import { BaseComponent, ItemLeftRight, Utility } from '../../components';
import styles from './LoanTaxRate.scss';

export default class LoanTaxRate extends BaseComponent {
  constructor(props) {
    super(props);

    const obj = { Money: '490000', Month: '72', Rate: '5.88' };
    this.state = Object.assign({}, this.state, obj);
  }

  componentWillMount() {
    super.componentWillMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount();
  }

  onChange(fieldName, data) {
    this.state[fieldName] = data;
    const { Method } = this.state;
    if (Method) {
      const { Value } = Method || {};
      if (Value === '1') {
        this.Method1();
      } else {
        this.Method2();
      }
    }
    const { divCondition, divHeader, divRows } = this.refs;
    const divConditionHeight = this.GetCtrlHeight(divCondition);
    const divHeaderHight = this.GetCtrlHeight(divHeader);
    const diffHeight = window.screen.availHeight - divConditionHeight - divHeaderHight - 45;
    divRows.style.height = diffHeight + 'px';

    this.UpdateRender();
  }

  /**
   * 等额本金还款
   *
   * @memberof LoanTaxRate
   */
  Method1() {
    const { Money, Month, Rate } = this.state;
    if (!Money || !Month || !Rate) {
      return;
    }
    const monthRate = Rate / 12;
    const monthMoney = Money / Month;

    const getRow = (money) => {
      const interest = (money * monthRate) / 100;
      const amount = interest + monthMoney;
      return { interest, amount };
    };
    const item = [];
    let totalMoney = 0;
    let TotalInterest = 0;
    for (let i = Month; i > 0; i -= 1) {
      const { interest, amount } = getRow(Money - totalMoney);
      totalMoney += monthMoney;
      TotalInterest += interest;
      item.push({
        interest,
        amount,
        balance: Money - totalMoney,
        month: (Month - i) + 1
      });
    }
    this.state.TotalInterest = TotalInterest;
    this.state.ResultList = item;
  }

  /**
   * 等额本息
   *
   * @memberof LoanTaxRate
   */
  Method2() {
    const { Money, Month, Rate } = this.state;
    if (!Money || !Month || !Rate) {
      return;
    }
    const _rate = Rate / 100;
    const monthRate = _rate / 12;

    // 每月还款金额
    const a = ((1 + monthRate) ** Month) * monthRate;
    const b = ((1 + monthRate) ** Month) - 1;
    // 月还款额。
    const monthMoney = (a / b) * Money;

    const getRow = (month, money) => {
      // 利息
      const interest = money * monthRate;
      const benJing = monthMoney - interest;
      return { interest, benJing };
    };

    const item = [];
    let totalAmount = 0;
    let TotalInterest = 0;
    for (let i = Month; i > 0; i -= 1) {
      const { interest, benJing } = getRow(Month, Money - totalAmount);
      totalAmount += benJing;
      TotalInterest += interest;
      item.push({
        month: (Month - i) + 1,
        amount: monthMoney,
        interest,
        benJing,
        balance: Money - totalAmount
      });
    }
    this.state.TotalInterest = TotalInterest;
    this.state.ResultList = item;
  }

  BuildHtml() {
    const { Method } = this.state;
    if (!Method) {
      return null;
    }

    return this.BuildMethod1();
  }

  BuildMethod1() {
    const { ResultList } = this.state;
    if (!Utility.isArray(ResultList)) {
      return null;
    }
    return ResultList.map((row, index) => {
      const { interest, amount, balance, month } = row;
      return (
        <div key={index} className={styles.row}>
          <div className={styles.month}>{month}</div>
          <div className={styles.amount}>{(amount).toFixed(2, 0)}</div>
          <div className={styles.interest}>{(interest).toFixed(2, 0)}</div>
          <div className={styles.balance}>{(balance).toFixed(2, 0)}</div>
        </div>
      );
    });
  }

  render() {
    const { Money, Month, Rate, TotalInterest } = this.state;
    return (
      <div className={styles.loanTaxRateCss}>
        <div ref="divCondition" className={styles.condition}>
          <ItemLeftRight LeftText="贷款金额(元)：" Placeholder="请填写贷款金额XXX元" RightText={Money} MaxValue={999999999} DataType="number"
            OnChange={this.onChange.bind(this, 'Money')} />
          <ItemLeftRight LeftText="贷款期限(月)：" Placeholder="请填写贷款期限XXX月" RightText={Month} MaxValue={360} DataType="number"
            OnChange={this.onChange.bind(this, 'Month')} />
          <ItemLeftRight LeftText="贷款年利率：" Placeholder="贷款年利率 3.33%" RightText={Rate} DataType="number"
            OnChange={this.onChange.bind(this, 'Rate')} />
          <ItemLeftRight LeftText="还款方式：" DefaultValue="1" DataSourceType="radio"
            DataSource={[
              { Title: '等额本金', Value: '1' },
              { Title: '等额本息', Value: '2' },
            ]}
            OnChange={this.onChange.bind(this, 'Method')}
          />
          {
            // TotalInterest &&
            <ItemLeftRight LeftText="利息："
              Placeholder="总的还款利息" RightText={(TotalInterest || 0).toFixed(2, 0)}
              DataType="number"
              Disable
            />
          }
        </div>

        <div className={styles.result}>
          <div ref="divHeader" className={styles.header}>
            <div className={styles.month}>期数</div>
            <div className={styles.amount}>月供 </div>
            <div className={styles.interest}>利息</div>
            <div className={styles.balance}>余额</div>
          </div>
          <div ref="divRows" className={styles.rows}>
            {
              this.BuildHtml()
            }
          </div>
        </div>
      </div>
    );
  }
}
