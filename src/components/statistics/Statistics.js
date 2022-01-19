import React from 'react';
import { 
    Title,
Stats
    
    
} from "./Statistics.styled";
const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
<div>
<Title>Statistics</Title>
                <div className="Wrap">
                    <Stats>
                <li>Good: {good} </li>
                <li>Neutral: {neutral} </li>
                <li>Bad: {bad} </li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
                    </Stats>
        </div>
        </div>

);

 export default Statistics;