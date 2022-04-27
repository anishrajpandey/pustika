import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./../../styles/HeroSection.module.css";
import Navbar from "./Navbar";
import imageArray from "./BooksData";

const HeroSection = () => {
  const [RandomIndex, setRandomIndex] = useState(
    Math.ceil(Math.random() * -1 * imageArray.length)
  );

  useEffect(() => {
    const StartInternal = setInterval(() => {
      setRandomIndex(Math.ceil(Math.random() * -1 * imageArray.length));
    }, 30000);
    return () => {
      clearInterval(StartInternal);
    };
  }, []);
  return (
    <main className={styles.main}>
      <style jsx>{`
        div.scrollableContainer {
          transform: translateX(${RandomIndex * 50}vw);
        }
      `}</style>

      <Navbar />
      <div className={styles.imageContainer}>
        <Image
          src={"/hero-image.jpg"}
          layout={"fill"}
          // width={"1000"}
          // height={450}
          priority={false}
        ></Image>
      </div>

      <div className={styles.contentBox}>
        <h1>Trending Books:</h1>
        <section className={styles.productShowcase}>
          <div className={styles.left}>
            <h2 className={styles.BookListHeading}>
              {imageArray[-1 * RandomIndex].name}
            </h2>
            {/* imageArray[-1 * RandomIndex] gives the book which is selected */}
            <p className={styles.bookDesc}>
              {imageArray[-1 * RandomIndex].description}
            </p>{" "}
            <p className={styles.authName}>
              {imageArray[-1 * RandomIndex].author}
            </p>
            <div className={styles.btnArea}>
              <button>Buy Now</button>
              <button>
                <Image
                  className={styles.cartImage}
                  src={"/cart.svg"}
                  width={20}
                  height={20}
                  layout={"fixed"}
                ></Image>
                Add To Cart
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.scrollingContainer}>
              {imageArray.map((e) => {
                return (
                  <div
                    key={e.name}
                    className={`${styles.scrollableContainer} scrollableContainer`}
                  >
                    <Image
                      priority={true}
                      src={`/book-images/${e.name}.webp`}
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
      {/* </div> */}
    </main>
  );
};

export default HeroSection;
