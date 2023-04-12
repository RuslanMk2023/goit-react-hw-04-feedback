import { Component } from 'react';

import { Statistics, FeedbackOptions, Section, Notification } from 'components';

import styles from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100);

  onLeaveFeedback = option => this.setState({ [option]: this.state[option] + 1 });

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.card}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics:">
          {!(this.countTotalFeedback() === 0) 
          ?  <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          : <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }
}
