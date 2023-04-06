import { Component } from 'react';

import styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={styles.card}>
        <h2> Please leave feedback</h2>

        <div className={styles.buttonsMenu}>
          <button type="button" onClick={()=> onLeaveFeedback(options.INCREASE_GOOD)}>
            good
          </button>
          <button type="button" onClick={()=>onLeaveFeedback(options.INCREASE_NEUTRAL)}>
            neutral
          </button>
          <button type="button" onClick={()=>onLeaveFeedback(options.INCREASE_BAD)}>
            bad
          </button>
        </div>
      </div>
    );
  }
}
