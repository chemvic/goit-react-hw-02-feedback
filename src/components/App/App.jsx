import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement=(type)=>{   
    this.setState((prevState)=>{return {[type]: prevState[type] +1,}} );
}

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
}

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  return Math.round((good / this.countTotalFeedback()) * 100);
}

render(){
const{good, neutral, bad}=this.state;
const total = this.countTotalFeedback();
const positiveFeedbacks = this.countPositiveFeedbackPercentage();


 return (
  
    <div
      style={{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        color: '#010101'
      }}
    >
    <Section title="Please leave feedback">
          <FeedbackOptions  onLeaveFeedback={this.handleIncrement} options={Object.keys(this.state)}/>
    </Section>
    <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positiveFeedbacks={positiveFeedbacks}/>
    </Section>   

    </div>
  );


}
 
};
export default App;