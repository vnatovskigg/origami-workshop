import React from "react";
import styles from "./submit-button.module.css";

const SubmitButton = ({ text }) => {
  return (
    <button type="submit" className={styles.submit}>
      {text}
    </button>
  );
};

export default SubmitButton;
