/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./../../styles/Store.module.css";
import Image from "next/image";
import Link from "next/link";
import FontAwesomeIcon, { faCartShopping } from "./assets/FontAwesome";
import addToCart from "../../utils/cartUtils";
import { useContext } from "react";
import Context from "../../utils/Context";
import Purchase from "./../components/Purchase";
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
  const {
    CartItems,
    setCartItems,
    ConfirmPurchaseOptions,
    setConfirmPurchaseOptions,
    UserData,
  } = useContext(Context);
  const handleCartClick = async (id, url) => {
    let data = await addToCart(id, url);
    CartItems.push(data);
    console.log(data);
    localStorage.setItem("cart", JSON.stringify({ CartItems }));
  };
  const handleConfirmPurchase = (
    e,
    { bookName, imageURL, price, _id, seller }
  ) => {
    setConfirmPurchaseOptions({
      show: true,
      bookName,
      bookImage: imageURL,
      price,
      bookId: _id,
      sellerId: seller.id,
    });
    console.log(seller.id, ConfirmPurchaseOptions.sellerId, "<=Seller id");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

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
                <button
                  onClick={(event) => {
                    console.log(e);
                    handleConfirmPurchase(event, e);
                  }}
                >
                  Buy
                </button>

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
        <div className={styles.item}>
          <Link href={"/components/Purchase"} passHref>
            <div className={styles.imageContainer}>
              <Image
                src={"/book-images/A Brief History of Time.webp"}
                layout={"fill"}
                alt="Product image not available"
              ></Image>
            </div>
          </Link>
          <p className={styles.BookName}>A Brief History of Time</p>
          <p className={styles.price}>Rs. 1999</p>
          <div className={styles.buttons}>
            <Link href={"/components/Purchase"}>
              <button>Buy</button>
            </Link>
            <FontAwesomeIcon
              onClick={(el) => {
                handleCartClick(e._id, url);
              }}
              className={styles.cartIcon}
              icon={faCartShopping}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      {ConfirmPurchaseOptions.show && (
        <div className={styles.confirmOrderContainer}>
          <Purchase
            bookName={ConfirmPurchaseOptions.bookName}
            bookImage={ConfirmPurchaseOptions.bookImage}
            price={ConfirmPurchaseOptions.price}
            bookId={ConfirmPurchaseOptions.bookId}
            buyerId={UserData._id}
            sellerId={ConfirmPurchaseOptions.sellerId}
          />
        </div>
      )}
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
