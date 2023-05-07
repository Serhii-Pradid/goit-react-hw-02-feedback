import React, {Component} from "react";

import {FeedbackOptions} from "./FeedbackOptions/feedbackOptions";
import {Statistics} from "./Statistics/Statistics";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }

    handleLeaveFeedback = btn => {
      this.setState(prevState => ({ [btn]: prevState[btn] + 1 }));
  };

render() {
  const { good, neutral, bad } = this.state;

  return (

    <div>

      <FeedbackOptions 
      options={Object.keys(this.state)}
      onLeaveFeedback={this.handleLeaveFeedback} />

      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={0}
      positivePercentage={0} />

    </div>
  );
}
};


