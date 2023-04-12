import React, { Component } from 'react';
import css from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement=(type)=>{   
    this.setState((prevState)=>{return {[type]: prevState[type] +1,}} );
}
// countTotalFeedback = ({good, neutral, bad}) =>{
// const total = good + neutral + bad;
// console.log(total);
// return total;
// }
countPositiveFeedbackPercentage = () =>{

}

render(){
const{good, neutral, bad}=this.state;
const total = good + neutral + bad;
const positiveFeedbacks =Math.round((good/total)*100);
 return (
  
    <div
      style={{
        // height: '100vh',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        color: '#010101'
      }}
    >
    <h2 className={css.title}>Please leave feedback</h2>
    <div className={css.selectors}>
    <button type="button" className={css.button} onClick={()=>this.handleIncrement('good')}>Good</button>
    <button type="button" className={css.button} onClick={()=>this.handleIncrement('neutral')}>Neutral</button>
    <button type="button" className={css.button} onClick={()=>this.handleIncrement('bad')}>Bad</button>
    </div>
   
    <h2 className="statistics__title">Statistics</h2>
    <p className={css.estimation}>Good: {good}</p>
    <p className={css.estimation}>Neutral: {neutral}</p>
    <p className={css.estimation}>Bad: {bad}</p>
    <p className={css.estimation}>Total: {total}</p>
    <p className={css.estimation}>Positive feedbacks: {positiveFeedbacks}%</p>
    
    </div>
  );


}
 
};
export default App;