import React from "react";
import styles from "./signinform.module.css";

const SignInForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <div className={styles.formContainer}>
      <h1>Sign In!</h1>

      <div className={styles.inputFieldContainer}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Enter Email"
        />
      </div>
      <div className={styles.inputFieldContainer}>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Password"
        />
      </div>
      <button className={styles.actionButton}>Sign In</button>
    </div>
  );
};

export default SignInForm;
