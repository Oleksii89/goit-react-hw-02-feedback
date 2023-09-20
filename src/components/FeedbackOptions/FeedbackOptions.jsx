export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => {
      return (
        <li key={option}>
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
          ></button>
        </li>
      );
    })}
  </ul>
);
