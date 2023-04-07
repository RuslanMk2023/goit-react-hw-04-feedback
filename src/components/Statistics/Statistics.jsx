import { Component } from 'react';

import styles from './Statistics.module.css';

const labels = ['Good', 'Neutral', 'Bad', 'Total', 'Positive feedback'];

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const items = [good, neutral, bad, total, positivePercentage];

    const getQuantity = item => {
      if (item === positivePercentage) {
        return good > 0 ? `${item} %` : 0;
      }
      return item;
    };

    return (
      <div className={styles.statistics}>
        {items.map((item, key) => {
          return (
            <div className={styles.statistics_item} key={key}>
              <span className={styles.statistics_item__label}>
                {`${labels[key]}: `}
              </span>
              <span className={styles.statistics_item__quantity}>
                {getQuantity(item)}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
