import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions=({onLeaveFeedback})=>{
    return(
        <div className={css.selectors}>
        <button type="button" className={css.button} onClick={()=>onLeaveFeedback('good')}>Good</button>
        <button type="button" className={css.button} onClick={()=>onLeaveFeedback('neutral')}>Neutral</button>
        <button type="button" className={css.button} onClick={()=>onLeaveFeedback('bad')}>Bad</button>
        </div> 
    )
}

FeedbackOptions.propTypes={
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;