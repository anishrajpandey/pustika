import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./../../styles/HeroSection.module.css";
import Link from "next/link";
import imageArray from "../../public/BooksData";
import mongoose from "mongoose";
const HeroSection = () => {
  const connectToDatabase = async () => {
    await mongoose.connect(
      "mongodb+srv://anishrajpandey:anishrajpandey@cluster0.xaa3c.mongodb.net/test"
    )();
  };
  const [RandomIndex, setRandomIndex] = useState(
    Math.ceil(Math.random() * -1 * imageArray.length)
  );

  useEffect(() => {
    const StartInternal = setInterval(() => {
      setRandomIndex(Math.ceil(Math.random() * -1 * imageArray.length));
    }, 3000);
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
      {/* <Navbar /> */}
      <div id={styles.imageContainer}>
        <Image
          alt="Error"
          src={"/hero-image.jpg"}
          layout={"fill"}
          priority={false}
        ></Image>
      </div>
      <div className={styles.contentBox}>
        <h1>Trending Books Today:</h1>
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
              <Link href={"./components/Store"}>
                <button className="btn-primary">Buy Now</button>
              </Link>
              <button>
                <Image
                  alt="Error"
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
                      alt="Error"
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
    </main>
  );
};

export default HeroSection;
