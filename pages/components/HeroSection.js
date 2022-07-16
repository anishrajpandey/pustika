import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./../../styles/HeroSection.module.css";
import Link from "next/link";
import imageArray from "../../public/BooksData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-regular-svg-icons";

const HeroSection = () => {
  const [RandomIndex, setRandomIndex] = useState(
    Math.ceil(Math.random() * -1 * imageArray.length)
  );

  useEffect(() => {
    const StartInternal = setInterval(() => {
      setRandomIndex(Math.ceil(Math.random() * -1 * imageArray.length));
    }, 10000);
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
              <Link href={"./components/Store"} passHref>
                <button className="btn-primary">Buy Now</button>
              </Link>
              <Link href={"./components/Store"} passHref>
                <button>
                  <Image
                    alt="Error"
                    className={styles.cartImage}
                    src={"/cart.svg"}
                    width={20}
                    height={20}
                    layout={"fixed"}
                  ></Image>
                  Explore More
                </button>
              </Link>
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
