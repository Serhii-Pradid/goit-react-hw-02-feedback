
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
   

export default FeedbackOptions;

