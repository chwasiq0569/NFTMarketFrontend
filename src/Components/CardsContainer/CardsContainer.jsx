import React from "react";
import styles from "./cardscontainer.module.css";
import ImageCard from "../ImageCard/ImageCard";

const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsWrapper}>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default CardsContainer;
