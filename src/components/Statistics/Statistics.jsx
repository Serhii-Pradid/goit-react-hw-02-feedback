import PropTypes from 'prop-types';

export const Statistics = ({ 
    good = 0, 
    neutral = 0, 
    bad = 0, 
    total = 0, 
    positivePercentage = 0 }) => {
        return (
           <ul>
        <li>Good: <span>{good}</span></li>
        <li>Neutral: <span>{neutral}</span></li>
        <li>Bad: <span>{bad}</span></li>
        <li>Total: <span>{total}</span></li>
        <li>Positive percentage: <span>{positivePercentage}%</span></li>
    </ul>          
    );
    };
    
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;