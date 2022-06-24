import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./../../styles/Item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const BuyItem = ({ url }) => {
  const [BookData, setBookData] = useState({});
  let Router = useRouter();
  let {
    query: { item: slug },
  } = Router;

  useEffect(() => {
    const requestAPI = async () => {
      let res = await fetch(`${url}/api/getProductById`, {
        method: "POST",
        body: JSON.stringify({
          id: slug,
        }),
      });
      let { data } = await res.json();
      setBookData(data);
    };
    requestAPI();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={BookData.imageURL || "/loader1.gif"}
            layout={"fill"}
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1>{BookData.bookName}</h1>
        <p>{BookData.description}</p>
        <h3>Price: Rs.{BookData.price}</h3>
        <div className={styles.btns}>
          <button className={`btn-primary ${styles.buyBtn}`}>Buy Now</button>
          <button className={`btn-primary ${styles.cartBtn}`}>
            <FontAwesomeIcon
              style={{ fontSize: "1.4rem" }}
              icon={faCartShopping}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  return {
    props: {
      url: process.env.PAGE_URL,
    },
  };
}
export default BuyItem;
