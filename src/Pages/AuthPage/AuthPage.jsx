import React from "react";
import styles from "./authpage.module.css";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";

const AuthPage = () => {
  return (
    <div className={styles.authPageContainer}>
      <div className={styles.intoDesignContainer}></div>
      <div className={styles.authFormContainer}>
        {/* <div className={styles.logoContainer}>
          <p>NFT</p>
        </div> */}
        <SignUpForm />
      </div>
    </div>
  );
};

export default AuthPage;
