import React from "react";
import styles from "./navbar.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

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
            <button>Sign In</button>
          </div>
        </div>
      ) : (
        <div className={styles.navItemsContainer}>
          <Link
            style={{ border: "none", outline: "none", textDecoration: "none" }}
            to="/explore"
          >
            {" "}
            <div className={styles.navItem}>
              <span>Explore</span>
            </div>
          </Link>
          <Link to="/">
            {" "}
            <div className={styles.navItem}>
              <span>Create Collection</span>
            </div>
          </Link>

          <div className={styles.navCtaBtnContainer}>
            <button onClick={() => navigate("/auth")}>Sign In</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
