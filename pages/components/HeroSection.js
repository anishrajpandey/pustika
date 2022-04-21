import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./../../styles/HeroSection.module.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  let imageArray = [
    {
      name: "The Subtle Art of Not Giving a Fuck",
      description: "Hello guys this is a descriptionsdsdf",
      author: "Anish Raj Pandsey",
    },
    {
      name: "How to Win Friends and Influence People",
      description: "Hello guys this is a descriptionuykjh",
      author: "Anish Raj Pxcxzandey",
    },
    {
      name: "Outliers The Story of Success",
      description: "Hello guys this is a descriptionghjygh",
      author: "Anish Raj Psdfsfandey",
    },
    {
      name: "The 7 Habits of Highly Effective People",
      description: "Hello guys this is a descriptionsawdssef",
      author: "Anish Raj Padsfsdfendey",
    },
    {
      name: "Who Moved My Cheese",
      description: "Hello guys this is a description sa",
      author: "Anish Raj Pandserfey",
    },
    {
      name: "The Power of Habit Why We Do What We Do in Life and Business",
      description: "Hello guys this is a descriptiondhyjhmnv",
      author: "Anish Raj Perwrweandey",
    },
    {
      name: "The Secret",
      description: "Hello guys this is a descriptionfrty",
      author: "Anish Raj werwerPandey",
    },
    {
      name: "Thinking, Fast and Slow",
      description: "Hello guys this is a descriptionxzfsaw",
      author: "Anish Raj Panweresdfdey",
    },
    {
      name: "Quiet The Power of Introverts in a World That Can't Stop Talking",
      description: "Hello guys this is a descriptionsdasda",
      author: "Anish Raj Paertretndey",
    },
    {
      name: "Think and Grow Rich",
      description: "Hello guys this is a descriptionasdas",
      author: "Anish Raj Panreyfhfdey",
    },
    {
      name: "The Power of Now",
      description: "Hello guys this is a descriptionsdhfbvc",
      author: "Anish Raj Panddgdfgdrgey",
    },
    {
      name: "Atomic Habits",
      description: "Hello guys this is a descriptionzfdsdgf ",
      author: "Anish Raj Pandert54yey",
    },

    {
      name: "Harry Potter",
      description: "Hello guys this is a descriptiond",
      author: "Anish Raj Panetetrdey",
    },
    {
      name: "A Brief History of Time",
      description: "Hello guys this is a descriptionasfs",
      author: "Anish Raj Panregddey",
    },
    {
      name: "Our Little World",
      description: "Hello guys this is a descriptionsertgf",
      author: "Anish Raj Panreterydey",
    },
    {
      name: "The Lords of the Rings",
      description: "Hello guys this is a descriptionsaewtr",
      author: "Anish Raj Panadawedey",
    },
    {
      name: "The Little Prince",
      description: "Hello guys this is a descriptionjyuhj",
      author: "Anish Raj Panwqwetrgddey",
    },
  ];

  const [RandomIndex, setRandomIndex] = useState(
    Math.ceil(Math.random() * -1 * imageArray.length)
  );

  useEffect(() => {
    const StartInternal = setInterval(() => {
      //todo set random letter
      // setRandomIndex(Math.ceil(Math.random() * -1 * imageArray.length));
      setRandomIndex(RandomIndex > -17 ? RandomIndex - 1 : RandomIndex + 1);
      // setRandomIndex();
    }, 40000);
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
              <h2 className={styles.BookListHeading}>
                {imageArray[-1 * RandomIndex].name}
              </h2>
              {/* imageArray[-1 * RandomIndex] gives the book which is selected */}
              <p>{imageArray[-1 * RandomIndex].description}</p>{" "}
              <p>{imageArray[-1 * RandomIndex].author}</p>
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
      </div>
    </main>
  );
};

export default HeroSection;
