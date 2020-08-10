import React from "react";
import styles from "./submit-button.module.css";

const SubmitButton = ({ text, onClick }) => {
  return (
    <button type="submit" className={styles.submit} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
