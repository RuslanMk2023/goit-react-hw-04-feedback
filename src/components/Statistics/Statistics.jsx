import PropTypes from 'prop-types';

import { StatisticsItem } from './StatisticsItem';

import styles from './Statistics.module.css';

const labels = ['Good', 'Neutral', 'Bad', 'Total', 'Positive feedback'];

export const Statistics = props => (
  <ul className={styles}>
    {Object.values(props).map((item, key) => (
      <StatisticsItem
        item={item}
        positivePercentage={props.positivePercentage}
        key={key}
        label={labels[key]}
      />
    ))}
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
