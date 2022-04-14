import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./../../styles/HeroSection.module.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  const [RandomIndex, setRandomIndex] = useState(false);

  // scroller.current.style.transform = `translateX(${Math.ceil(
  //   Math.random() * -17
  // )}vw)`;
  // setInterval(() => {
  //   setRandomIndex(Math.ceil(Math.random() * -17));
  //   console.log("Hellow");
  // }, 10000);
  const getRandomIndex = () => {
    let num = Math.ceil(Math.random() * -17);
    // console.log(num);
    tochange = !tochange;
    if (tochange) {
      console.log(num);
      setTimeout(getRandomIndex, 3000);
      return num;
    }
  };
  // setInterval(() => setIndex(!Index), 3000);
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

  return (
    <main className={styles.main}>
      <style jsx>{`
        div.scrollableContainer {
          transform: translateX(${-8 * 50}vw);
        }
      `}</style>
      {/* {console.log(getRandomIndex())} */}
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
                        priority={true}
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
          setRandomIndex(!RandomIndex);
        }}
      >
        Click Me{" "}
      </button>
    </main>
  );
};

export default HeroSection;
