import { Component } from 'react';

import styles from './Statistics.module.css';

export class Statistics  extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGood = () => this.setState({ good: this.state.good + 1 });
  increaseNeutral = () => this.setState({ neutral: this.state.neutral + 1 });
  increaseBad = () => this.setState({ bad: this.state.bad + 1 });

  countTotalFeedback = () =>   this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>  Math.round(this.state.good / this.countTotalFeedback() * 100);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      //   <div className={classNames(styles.card, styles.row)}>
      <div className={styles.card}>
        <h2> Please leave feedback</h2>

        <div className={styles.buttonsMenu}>
          <button type="button" onClick={this.increaseGood}>
            good
          </button>
          <button type="button" onClick={this.increaseNeutral}>
            neutral
          </button>
          <button type="button" onClick={this.increaseBad}>
            bad
          </button>
        </div>

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
            <span className={styles.statistics_item__quantity}>
              {this.countTotalFeedback()}
            </span>
          </div>

          <div className={styles.statistics_item}>
            <span className={styles.statistics_item__label}> Positive feedback: </span>
            <span className={styles.statistics_item__quantity}>
              {good > 0 
              ?`${this.countPositiveFeedbackPercentage()} %`
              : 0}
            </span>
          </div>

        </div>
      </div>
    );
  }
}
