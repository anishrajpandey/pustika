import React, { useState } from "react";
import Image from "next/image";
import styles from "./../../styles/HeroSection.module.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  // const [randInd, setrandInd] = React.useState(0);
  const getRandomIndex = (length = 17) => {
    let num = Math.ceil(Math.random() * length);
    console.log(num);
    return num;
  };
  let imageArray = [
    "The Subtle Art of Not Giving a Fuck",
    "How to Win Friends and Influence People",
    "Outliers The Story of Success",
    "The 7 Habits of Highly Effective People",
    "Who Moved My Cheese",
    "The Power of Habit Why We Do What We Do in Life and Business",
    "The Secret",
    "Thinking, Fast and Slow",
    "Quiet The Power of Introverts in a World That Can't Stop Talking",
    "Think and Grow Rich",
    "The Power of Now",
    "Atomic Habits",
    "Harry Potter",
    "A Brief History of Time",
    "Our Little World",
    "The Lords of the Rings",
    "The Little Prince",
  ];

  // setInterval(getRandomIndex, 1000);
  return (
    <main className={styles.main}>
      <style jsx>{`
        div.scrollableContainer {
          transform: translateX(calc(${getRandomIndex()}*50vw));
        }
      `}</style>
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
          <h1>Bibliophile</h1>
          <section className={styles.productShowcase}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <div className={styles.scrollingContainer}>
                {imageArray.map((e) => {
                  return (
                    <div
                      key={e}
                      className={`${styles.scrollableContainer} scrollableContainer`}
                    >
                      <Image
                        src={`/book-images/${e}.webp`}
                        width={340}
                        height={450}
                        layout={"intrinsic"}
                      ></Image>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      <button
        onClick={() => {
          getRandomIndex(17);
        }}
      >
        Click Me{" "}
      </button>
    </main>
  );
};

export default HeroSection;
