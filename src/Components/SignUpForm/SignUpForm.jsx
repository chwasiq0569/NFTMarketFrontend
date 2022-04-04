import React from "react";
import styles from "./signupform.module.css";

const SignUpForm = () => {
  return (
    <div className={styles.formContainer}>
      <h1>Welcome to Wasiq!</h1>

      <div className={styles.inputFieldContainer}>
        <input type="text" placeholder="Enter Email" />
      </div>
      <div className={styles.inputFieldContainer}>
        <input type="text" placeholder="Enter Password" />
      </div>
      <button className={styles.actionButton}>Log In</button>
    </div>
  );
};

export default SignUpForm;
