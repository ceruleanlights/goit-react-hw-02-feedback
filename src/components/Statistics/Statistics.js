import styles from "./Statistics.module.css";

const Statistics = ({ good, bad, neutral, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <ul className={styles.statisticsList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {countTotalFeedback}</li>
      <li>Positive: {countPositiveFeedbackPercentage}%</li>
    </ul>
  );
};

export default Statistics;
