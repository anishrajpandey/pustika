import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./../../styles/HeroSection.module.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  let imageArray = [
    {
      name: "The Subtle Art of Not Giving a Fuck",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "How to Win Friends and Influence People",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "Outliers The Story of Success",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "The 7 Habits of Highly Effective People",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "Who Moved My Cheese",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "The Power of Habit Why We Do What We Do in Life and Business",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "The Secret",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "Thinking, Fast and Slow",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "Quiet The Power of Introverts in a World That Can't Stop Talking",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "Think and Grow Rich",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "The Power of Now",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "Atomic Habits",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },

    {
      name: "Harry Potter",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "A Brief History of Time",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "Our Little World",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "The Lords of the Rings",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
    {
      name: "The Little Prince",
      description: "Hello guys this is a description",
      author: "Anish Raj Pandey",
    },
  ];

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
            <div className={styles.left}>
              <p>Name Of Book:{imageArray[-1 * RandomIndex].name}</p>
              {/* imageArray[-1 * RandomIndex] gives the book which is selected */}
              <p>{imageArray[-1 * RandomIndex].description}</p>{" "}
              <p>{imageArray[-1 * RandomIndex].author}</p>
            </div>
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
      </div>
    </main>
  );
};

export default HeroSection;
