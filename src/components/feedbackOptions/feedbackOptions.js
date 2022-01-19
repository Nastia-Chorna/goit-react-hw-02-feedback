import React from 'react';
import Statistics from '../statistics/Statistics';
import Notification from '../notification/Notification';
import { 
    Title,
    Wrap,
    Button
    
    
} from "./feedbackOptions.styled";

class Counter extends React.Component{
     state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    handleIncrementGood = () => {
        this.setState(prevState => ({
            
        good: prevState.good + 1,
        
        }));
    };
    handleIncrementNeutral = () => {
        this.setState(prevState => ({
            
        neutral: prevState.neutral + 1,
        
        }));
    };
    handleIncrementBad = () => {
        this.setState(prevState => ({
            
        bad: prevState.bad + 1,
        
        }));
    };
    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
    };
    countPositivePercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

    render() {
        return (
            <div className="Counter">
                <Title>Please leave a feedback</Title>
                <Wrap className="Wrap">
                <Button type="button" onClick={this.handleIncrementGood}>good</Button>
                <Button type="button" onClick={this.handleIncrementNeutral}>neutral</Button>
                <Button type="button" onClick={this.handleIncrementBad}>bad</Button>
                </Wrap>

                {this.countTotalFeedback() ? (
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositivePercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback"
                    />)}
                 </div>
              
              
        )
    }
}
export default Counter;