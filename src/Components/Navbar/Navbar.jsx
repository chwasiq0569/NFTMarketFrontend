import React from "react";
import styles from "./navbar.module.css";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}></div>

      {isTablet ? (
        <div className={styles.mobileNavWrapper}>
          <div className={styles.mobileNavItem}>
            <span>Collections</span>
          </div>
          <div className={styles.mobileNavItem}>
            <span>FAQ</span>
          </div>
          <div className={styles.mobileNavCtaBtnContainer}>
            <button>Select Wallet</button>
          </div>
        </div>
      ) : (
        <div className={styles.navItemsContainer}>
          <div className={styles.navItem}>
            <span>Collections</span>
          </div>
          <div className={styles.navItem}>
            <span>FAQ</span>
          </div>
          <div className={styles.navCtaBtnContainer}>
            <button>Select Wallet</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
