import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./../../styles/Store.module.css";
import Image from "next/image";

import FontAwesomeIcon, { faCartShopping } from "./assets/FontAwesome";

const Store = ({ url }) => {
  var [ImageArray, setImageArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`${url}/api/getBooks`);
      let { data } = await res.json();
      setImageArray(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Store-pustika</title>
      </Head>
      <div className={styles.AllItems}>
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
export async function getServerSideProps() {
  return {
    props: {
      url: process.env.PAGE_URL,
    },
  };
}
export default Store;
