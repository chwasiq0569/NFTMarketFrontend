import React from "react";
import styles from "./cardscontainer.module.css";
import ImageCard from "../ImageCard/ImageCard";

const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </div>
  );
};

export default CardsContainer;
