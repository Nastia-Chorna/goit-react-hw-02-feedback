import React from 'react';
import PropTypes from "prop-types";
import { 
    Wrap,
    Button  
    
} from "./feedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Wrap>
         {options.map(key => (
                <Button
                    key={key}
                    type="button"
                    onClick={() => onLeaveFeedback(key)}
                    className="button"
                >
                    {key}
                </Button>
            ))}   

       </Wrap>
   ) 
};
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
    export default FeedbackOptions;
