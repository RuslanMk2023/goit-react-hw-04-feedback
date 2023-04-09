import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const labels = ['Good', 'Neutral', 'Bad', 'Total', 'Positive feedback'];

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const items = [good, neutral, bad, total, positivePercentage];

    const getQuantity = item => {
      if (item === positivePercentage) {
        return positivePercentage > 0 ? `${positivePercentage} %` : 0;
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};