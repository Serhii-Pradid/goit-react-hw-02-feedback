import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    return (
    
        <div>
            {options.map(btn => (
                <button
                key={btn}
                type='button'
                name={btn}
                onClick={() => onLeaveFeedback(btn)}>
                {btn}
            </button>
             ))}
        </div>
         )
}
   

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;

