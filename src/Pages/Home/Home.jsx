import React from "react";
import styles from "./home.module.css";
import Navbar from "./../../Components/Navbar/Navbar";
import HomeHero from "./../../Components/HomeHero/HomeHero";
import MainCTASection from "../../Components/MainCTASection/MainCTASection";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <Navbar />
        <HomeHero />
        <MainCTASection />
      </div>
    </div>
  );
};

export default Home;
