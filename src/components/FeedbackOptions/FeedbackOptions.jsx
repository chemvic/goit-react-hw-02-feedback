import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.selectors}>
     {options.map(option=>(<button
     key={option}
     type="button"
     className={css.button}
     onClick={()=>onLeaveFeedback(option)}
     >
        {option}
     </button>))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options:  PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FeedbackOptions;
