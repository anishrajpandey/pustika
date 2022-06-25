import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./../../styles/Item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Head from "next/head";
import { addToCart } from "../../utils/cartUtils";
import { useContext } from "react";
import Context from "./../context/Context";
const BuyItem = ({ url }) => {
  const [BookData, setBookData] = useState({});
  const { CartItems, setCartItems } = useContext(Context);
  let Router = useRouter();
  let {
    query: { item: slug },
  } = Router;
  const handleCartClick = async (id, url) => {
    let data = await addToCart(id, url);
    CartItems.push(data);
    console.log(CartItems);
    localStorage.setItem("cart", JSON.stringify({ CartItems }));
  };
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
    setCartItems(JSON.parse(localStorage.getItem("cart"))?.CartItems);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Buy-{BookData.bookName}</title>
      </Head>
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
              onClick={() => {
                handleCartClick(BookData._id, url);
              }}
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
