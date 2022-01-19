import React from 'react';
import { 
    Title,
Stats
    
    
} from "./Statistics.styled";
const Statistics = ({good, neutral, bad}) => (
<div>
<Title>Statistics</Title>
                <div className="Wrap">
                    <Stats>
                <li>Good: {good} </li>
                <li>Neutral: {neutral} </li>
                <li>Bad: {bad} </li>
                    </Stats>
        </div>
        </div>

);

 export default Statistics;