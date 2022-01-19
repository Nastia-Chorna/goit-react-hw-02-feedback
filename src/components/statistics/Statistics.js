import React from 'react';

const Statistics = ({good, neutral, bad}) => (
<div>
<title>Statistics</title>
                <div className="Wrap">
                    <ul>
                <li>Good: {good} </li>
                <li>Neutral: {neutral} </li>
                <li>Bad: {bad} </li>
                    </ul>
        </div>
        </div>

);

 export default Statistics;