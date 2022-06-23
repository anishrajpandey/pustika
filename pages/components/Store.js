import { useEffect, useState } from "react";

import styles from "./../../styles/Store.module.css";
import Image from "next/image";
import DummyImage from "../../public/book-images/Atomic Habits.webp";

import FontAwesomeIcon, { faCartShopping } from "./assets/FontAwesome";

const Store = (data) => {
  var [ImageArray, setImageArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("http://localhost:3000/api/books");
      let { imageArray: a } = await data.json();
      setImageArray(a);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.AllItems}>
        {console.log(ImageArray)}
        {ImageArray.map((e) => {
          return (
            <div className={styles.item} key={Math.random()}>
              <div className={styles.imageContainer}>
                <Image
                  src={`/book-images/${e.name}.webp`}
                  layout={"fill"}
                  // objectFit={"contain"}
                  alt="Product image not available"
                />
              </div>
              <p className={styles.BookName}>
                <>{e.name}</>
              </p>
              <p className={styles.price}>$2.99</p>
              <div className={styles.buttons}>
                <button>Buy</button>

                <FontAwesomeIcon
                  className={styles.cartIcon}
                  icon={faCartShopping}
                ></FontAwesomeIcon>
              </div>
            </div>
          );
        })}
      </div>
      ;
    </>
  );
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
