import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
