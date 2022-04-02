import React from "react";
import styles from "./itemsdetail.module.css";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import DummyCardImage from "../../assets/images/dummyimage.png";

const ItemsDetail = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <Navbar />
        <div className={styles.imageDetailsContainer}>
          <div className={styles.leftSide}>
            <img src={DummyCardImage} alt="image_" />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.titleAndPrice}>
              <p className={styles.title}>Abstact Smoke Red Blue</p>
              <p className={styles.price}>$ - 0.5</p>
            </div>
            <p className={styles.details}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <button className={styles.buyButton}>Buy for 0.5 $</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemsDetail;
