import { Component } from "react";
import FeedbackOptions from './components/feedbackOptions/feedbackOptions';
import Statistics from './components/statistics/Statistics';
import Notification from './components/notification/Notification';
import Section from './components/section/Section';

class App extends Component{
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };

    hendlerChange = key => {
    this.setState(prevState => ({
    [key]: prevState[key] + 1
    }))
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
    const {good, neutral, bad} = this.state
    const total = this.countTotalFeedback();
    return (

<>
            <Section title="Please leave feedback">
             <FeedbackOptions   
                options={Object.keys(this.state)}
                onLeaveFeedback={this.hendlerChange}
                />
            </Section> 
            
            <Section
                title="Statistics">
                {total > 0 ? (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositivePercentage()}
                />
            ) : (
                <Notification message="There is no feedback"
                />)}
   
</Section> 
</>
    )
}
  
};


export default App;
