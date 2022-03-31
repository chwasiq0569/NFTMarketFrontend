import React from "react";
import styles from "./imagecard.module.css";
import DummyCardImage from "../../assets/images/dummyimage.png";

const ImageCard = () => {
  return (
    <div className={styles.imageCardContainer}>
      <img src={DummyCardImage} alt="image_" />
      <div className={styles.lowerContent}>
        <div className={styles.details}>
          <p>Abstact Smoke Red Blue</p>
          <p>1.25 ETH</p>
        </div>
        <button className={styles.buyButton}>Buy</button>
      </div>
    </div>
  );
};

export default ImageCard;
