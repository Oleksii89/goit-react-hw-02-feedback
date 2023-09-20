export const Statistics = ({ title, good, neutral, bad }) => {
  return (
    <ul>
      {title && <p>{title}</p>}
      <li>
        <p>Good:</p>
        <span>{good}</span>
      </li>
      <li>
        <p>Neutral:</p>
        <span>{neutral}</span>
      </li>
      <li>
        <p>Bad:</p>
        <span>{bad}</span>
      </li>
    </ul>
  );
};
