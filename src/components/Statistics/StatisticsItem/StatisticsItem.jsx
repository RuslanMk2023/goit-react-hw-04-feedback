import PropTypes from 'prop-types';

import styles from './StatisticsItem.module.css';

export const StatisticsItem = ({ item, label, positivePercentage }) => {
  const getQuantity = item => {
    if (item === positivePercentage) {
      return positivePercentage > 0 ? `${positivePercentage} %` : 0;
    }
    return item;
  };

  return (
    <li className={styles.statistics_item} >
      <span className={styles.statistics_item__label}>
        {`${label}: `}
      </span>
      <span className={styles.statistics_item__quantity}>
        {getQuantity(item)}
      </span>
    </li>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
