import { Component } from 'react';

import styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={styles.card}>
        <div className={styles.buttonsMenu}>
          {options.map(option => {
            return (
              <button
                type="button"
                key={option}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
