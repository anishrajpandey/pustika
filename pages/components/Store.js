import { useEffect, useState } from "react";

import styles from "./../../styles/Store.module.css";
import Image from "next/image";

import FontAwesomeIcon, { faCartShopping } from "./assets/FontAwesome";

const Store = () => {
  var [ImageArray, setImageArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:3000/api/getBooks");
      let { data } = await res.json();
      setImageArray(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.AllItems}>
        {console.log(ImageArray)}
        {ImageArray.map((e) => {
          console.log(e.imageURL);
          return (
            <div className={styles.item} key={Math.random()}>
              <div className={styles.imageContainer}>
                <Image
                  src={e.imageURL}
                  layout={"fill"}
                  alt="Product image not available"
                ></Image>
              </div>
              <p className={styles.BookName}>{e.bookName}</p>
              <p className={styles.price}>Rs.{e.price}</p>
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
