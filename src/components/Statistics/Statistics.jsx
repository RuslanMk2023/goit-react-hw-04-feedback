import { Component } from 'react';

import styles from './Statistics.module.css';

export class Statistics extends Component {
  increaseGood = () => this.setState({ good: this.state.good + 1 });
  increaseNeutral = () => this.setState({ neutral: this.state.neutral + 1 });
  increaseBad = () => this.setState({ bad: this.state.bad + 1 });

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      //   <div className={classNames(styles.card, styles.row)}>
      <div className={styles.card}>
        <h2> Please leave feedback</h2>

        <div className={styles.statistics}>
          <h2> Statistics:</h2>

          <div className={styles.statistics_item}>
            <span className={styles.statistics_item__label}> Good: </span>
            <span className={styles.statistics_item__quantity}>{good}</span>
          </div>
          <div className={styles.statistics_item}>
            <span className={styles.statistics_item__label}> Neutral: </span>
            <span className={styles.statistics_item__quantity}>{neutral}</span>
          </div>
          <div className={styles.statistics_item}>
            <span className={styles.statistics_item__label}> Bad: </span>
            <span className={styles.statistics_item__quantity}>{bad}</span>
          </div>
          <div className={styles.statistics_item}>
            <span className={styles.statistics_item__label}> Total: </span>
            <span className={styles.statistics_item__quantity}> {total}</span>
          </div>

          <div className={styles.statistics_item}>
            <span className={styles.statistics_item__label}> Positive feedback: </span>
            <span className={styles.statistics_item__quantity}>
              {good > 0 ? `${positivePercentage} %` : 0}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
