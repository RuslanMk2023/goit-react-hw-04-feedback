import { Statistics, FeedbackOptions, Section, Notification } from 'components';
import { useState } from 'react';

import styles from './App.module.css';

export const App = () => {
  const [counters, setCounters] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = counters;

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const onLeaveFeedback = option =>
    setCounters(prevCounters => ({
      ...prevCounters,
      [option]: counters[option] + 1,
    }));

  return (
    <div className={styles.card}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(counters)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics:">
        {!(countTotalFeedback() === 0) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
