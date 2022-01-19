import React from 'react';
import Statistics from '../statistics/Statistics';
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

    render() {
        return (
            <div className="Counter">
                <Title>Please leave a feedback</Title>
                <Wrap className="Wrap">
                <Button type="button" onClick={this.handleIncrementGood}>good</Button>
                <Button type="button" onClick={this.handleIncrementNeutral}>neutral</Button>
                <Button type="button" onClick={this.handleIncrementBad}>bad</Button>
                </Wrap>

                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                />    
                 </div>
              
              
        )
    }
}
export default Counter;