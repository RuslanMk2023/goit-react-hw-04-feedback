import { Component } from 'react';

import { Statistics, FeedbackOptions } from 'components';

const OptionsEnum = {
  INCREASE_GOOD: 'good',
  INCREASE_NEUTRAL: 'neutral',
  INCREASE_BAD: 'bad',
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  onLeaveFeedback = (option) => {
    const {good, neutral, bad} = this.state;

    const optionFunctions = {
      good: () => this.setState({ good: good + 1 }),
      neutral: () => this.setState({ neutral: neutral + 1 }),
      bad: () => this.setState({ bad: bad + 1 }),
    };
    optionFunctions[option] && optionFunctions[option]();
  };


  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          options={OptionsEnum}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
