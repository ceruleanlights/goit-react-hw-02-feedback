import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.buttonList}>
      {options.map((option) => {
        const label = option[0].toUpperCase() + option.slice(1);
        return (
          <li className={styles.buttonListItem} key={option}>
            <button className={styles.button} onClick={onLeaveFeedback} name={option}>
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
