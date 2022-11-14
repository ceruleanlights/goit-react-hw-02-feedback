import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const positivePercentage = (this.state.good / this.countTotalFeedback()) * 100;
    return positivePercentage;
  }

  onLeaveFeedback = (e) => {
    const stateButtonName = e.target.textContent.toLowerCase();
    this.setState((prevState) => {
      for (const key in prevState) {
        if (key === stateButtonName) {
          return { [key]: prevState[key] + 1 };
        }
      }
    });
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(totalFeedback).toFixed();
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              countTotalFeedback={totalFeedback}
              countPositiveFeedbackPercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
