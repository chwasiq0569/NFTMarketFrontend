import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}></div>
      <div className={styles.navItemsContainer}>
        <div className={styles.navItem}>
          <span>Collections</span>
        </div>
        <div className={styles.navItem}>
          <span>FAQ</span>
        </div>
        <div className={styles.ctaBtnContainer}>
          <button>Select Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
