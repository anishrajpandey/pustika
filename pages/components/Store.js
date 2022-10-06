import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./../../styles/Store.module.css";
import Image from "next/image";
import Link from "next/link";
import FontAwesomeIcon, { faCartShopping } from "./assets/FontAwesome";
import addToCart from "../../utils/cartUtils";
import { useContext } from "react";
import Context from "../../utils/Context";
const Store = ({ url }) => {
  var [ImageArray, setImageArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`${url}/api/getBooks`);
      let { data } = await res.json();
      setImageArray(data);
    };
    fetchData();
    setCartItems(JSON.parse(localStorage.getItem("cart"))?.CartItems || []);
  }, []);
  const { CartItems, setCartItems } = useContext(Context);
  const handleCartClick = async (id, url) => {
    let data = await addToCart(id, url);
    CartItems.push(data);
    console.log(data);
    localStorage.setItem("cart", JSON.stringify({ CartItems }));
  };
  // he
  return (
    <>
      <Head>
        <title>Store-pustika</title>
      </Head>
      <div className={styles.AllItems}>
        {ImageArray.map((e) => {
          return (
            <div className={styles.item} key={Math.random()}>
              <Link href={`/buy/${e._id}`} passHref>
                <div className={styles.imageContainer}>
                  <Image
                    src={e.imageURL || "/assets/imagenotavailable.jpg"}
                    layout={"fill"}
                    alt="Product image not available"
                  ></Image>
                </div>
              </Link>
              <p className={styles.BookName}>{e.bookName}</p>
              <p className={styles.price}>Rs.{e.price}</p>
              <div className={styles.buttons}>
                <button>Buy</button>

                <FontAwesomeIcon
                  onClick={(el) => {
                    handleCartClick(e._id, url);
                  }}
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
