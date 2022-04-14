import React from "react";
import Image from "next/image";
import styles from "./../../styles/HeroSection.module.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.imageContainer}>
        <Image
          src={"/hero-image.jpg"}
          layout={"responsive"}
          width={"1000"}
          height={450}
          priority={false}
        ></Image>
        <div className={styles.contentBox}>
          <h1>A Place for your favourite books</h1>
          <section className={styles.productShowcase}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
