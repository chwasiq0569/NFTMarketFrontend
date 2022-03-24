import React from "react";
import styles from "./home.module.css";
import Navbar from "./../../Components/Navbar/Navbar";
import HomeHero from "./../../Components/HomeHero/HomeHero";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <Navbar />
        <HomeHero />
      </div>
    </div>
  );
};

export default Home;
