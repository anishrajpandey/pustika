import { useEffect, useState } from "react";

import styles from "./../../styles/Store.module.css";
import Image from "next/image";
import DummyImage from "../../public/book-images/Atomic Habits.webp";

import FontAwesomeIcon, { faCartShopping } from "./assets/FontAwesome";
// import clientPromise from "../../lib/mongodb";
const Store = (data) => {
  var [datajson, setdatajson] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("http://localhost:3000/api/books");
      let { imageArray } = await data.json();
      setdatajson(imageArray);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.AllItems}>
        <div className={styles.item}>
          <Image
            src={DummyImage}
            width={200}
            height={230}
            alt="Product image not available"
          />
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
          <Image
            src={DummyImage}
            width={200}
            height={230}
            alt="Product image not available"
          />
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
          <Image
            src={DummyImage}
            width={200}
            height={230}
            alt="Product image not available"
          />
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
          <Image
            src={DummyImage}
            width={200}
            height={230}
            alt="Product image not available"
          />
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
          <Image
            src={DummyImage}
            width={200}
            height={230}
            alt="Product image not available"
          />
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
          <Image
            src={DummyImage}
            width={200}
            height={230}
            alt="Product image not available"
          />
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
          <Image
            src={DummyImage}
            width={200}
            height={230}
            alt="Product image not available"
          />
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
          <Image
            src={DummyImage}
            width={200}
            height={230}
            alt="Product image not available"
          />
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
  <div className={styles.item}>
    <Image src={DummyImage} width={200} height={230} alt="Image" />
    <p className={styles.BookName}>Atomic Habits</p>
    <p className={styles.price}>$2.99</p>
    <div className={styles.buttons}>
      <button>Buy</button>
      <FontAwesomeIcon
        className={styles.cartIcon}
        icon={faCartShopping}
      ></FontAwesomeIcon>
    </div>
  </div>;
};
export default Store;
// export async function getServerSideProps() {
//   let client = await clientPromise;
//   let db = client.db("BooksDatabase");
//   let data = await db.collection("bookData");
//   console.log(data);
//   return {
//     props: {
//       data: "hello",
//     },
//   };
// }
