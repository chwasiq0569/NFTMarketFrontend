import React from "react";
import styles from "./cardscontainer.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Link } from "react-router-dom";
import DummyCardImage from "../../assets/images/dummyimage.png";

const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsWrapper}>
        <ImageCard image={DummyCardImage} />
        <ImageCard image={DummyCardImage} />
        <ImageCard image={DummyCardImage} />
        <ImageCard image={DummyCardImage} />
        <ImageCard image={DummyCardImage} />
        <ImageCard image={DummyCardImage} />
        <ImageCard image={DummyCardImage} />
        <ImageCard image={DummyCardImage} />
        <ImageCard image={DummyCardImage} />
      </div>
    </div>
  );
};

export default CardsContainer;
