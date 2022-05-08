import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import styles from "./../../styles/Store.module.css";
import Image from "next/image";
import DummyImage from "../../public/book-images/Atomic Habits.webp";

import FontAwesomeIcon, { faCartShopping } from "./assets/FontAwesome";

const Store = () => {
  var [datajson, setdatajson] = useState("");
  useEffect(async () => {
    let data = await fetch("http://localhost:3000/api/books");
    let { imageArray } = await data.json();
    setdatajson(imageArray);
  }, []);
  return (
    <>
      <Script
        src={"https://kit.fontawesome.com/3d2f093b4a.js"}
        strategy={"lazyOnload"}
      ></Script>

      <div className={styles.AllItems}>
        <div className={styles.item}>
          <Image src={DummyImage} width={200} height={230} />
          <p className={styles.BookName}>Atomic Habits</p>
          <p className={styles.price}>$2.99</p>
          <div className={styles.buttons}>
            <button>Buy</button>

            <FontAwesomeIcon
              className={styles.cartIcon}
              icon={faCartShopping}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={DummyImage} width={200} height={230} />
          <p className={styles.BookName}>Atomic Habits</p>
          <p className={styles.price}>$2.99</p>
          <div className={styles.buttons}>
            <button>Buy</button>

            <FontAwesomeIcon
              className={styles.cartIcon}
              icon={faCartShopping}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={DummyImage} width={200} height={230} />
          <p className={styles.BookName}>Atomic Habits</p>
          <p className={styles.price}>$2.99</p>
          <div className={styles.buttons}>
            <button>Buy</button>

            <FontAwesomeIcon
              className={styles.cartIcon}
              icon={faCartShopping}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={DummyImage} width={200} height={230} />
          <p className={styles.BookName}>Atomic Habits</p>
          <p className={styles.price}>$2.99</p>
          <div className={styles.buttons}>
            <button>Buy</button>

            <FontAwesomeIcon
              className={styles.cartIcon}
              icon={faCartShopping}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={DummyImage} width={200} height={230} />
          <p className={styles.BookName}>Atomic Habits</p>
          <p className={styles.price}>$2.99</p>
          <div className={styles.buttons}>
            <button>Buy</button>

            <FontAwesomeIcon
              className={styles.cartIcon}
              icon={faCartShopping}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </>
  );
};
// today i will be learning mongodb

export default Store;
