import React from "react";
import styles from "./home.module.css";
import Navbar from "./../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
