import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics =({good, neutral, bad, total, positiveFeedbacks})=>{
    return(
        <div>

    <p className={css.estimation}>Good: {good}</p>
    <p className={css.estimation}>Neutral: {neutral}</p>
    <p className={css.estimation}>Bad: {bad}</p>
    <p className={css.estimation}>Total: {total}</p>
    <p className={css.estimation}>Positive feedbacks: {positiveFeedbacks}%</p>
    
        </div>
    )
}

Statistics.propTypes={
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positiveFeedbacks:PropTypes.number.isRequired
}

export default Statistics;