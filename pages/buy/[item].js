import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./../../styles/Item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FaCopy } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";
import addToCart from "../../utils/cartUtils";
import { useContext } from "react";
import Context from "./../../utils/Context";
import Purchase from "../components/Purchase";
const BuyItem = ({ url }) => {
  const [BookData, setBookData] = useState({});
  const {
    CartItems,
    setCartItems,
    UserData,
    ConfirmPurchaseOptions,
    setConfirmPurchaseOptions,
  } = useContext(Context);

  let Router = useRouter();
  let {
    query: { item: slug },
  } = Router;
  const handleConfirmPurchase = (
    e,
    { bookName, imageURL, price, _id, sellerId }
  ) => {
    setConfirmPurchaseOptions({
      show: true,
      bookName,
      bookImage: imageURL,
      price,
      bookId: _id,
      sellerId,
    });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleCartClick = async (id, url) => {
    let data = await addToCart(id, url);
    console.log(CartItems);
    CartItems?.push(data);
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
          <button
            className={`btn-primary ${styles.buyBtn}`}
            onClick={(e) => {
              let { bookName, imageURL, price } = BookData;
              handleConfirmPurchase(e, {
                bookName,
                imageURL,
                price,
                _id: slug,
                sellerId: BookData.seller.id,
              });
            }}
          >
            Buy Now
          </button>
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
        <div className={styles.sellerInfo}>
          <h2 align="center">Contact Seller</h2>
          <div className={styles.imgContainer}>
            <Image
              src={BookData.seller?.image || "/assets/imagenotavailable.jpg"}
              height={120}
              width={120}
              alt="image  unavailable"
            ></Image>
          </div>
          <div>
            Seller Name:{" "}
            <span className={styles.infoItem}>
              {" "}
              {BookData.seller?.sellerName}
            </span>
          </div>
          <div>
            Address:{" "}
            <span className={styles.infoItem}> {BookData.seller?.address}</span>
          </div>
          <div>
            Phone-no:
            <span className={styles.infoItem}> {BookData.seller?.phone}</span>
            <span
              onClick={(e) => {
                navigator.clipboard.writeText(
                  e.target.parentElement.parentElement.parentElement.children[0]
                    .innerText
                );
                alert("Copied to clipboard");
              }}
            >
              <FaCopy />
            </span>
          </div>
          <button className={`btn-primary ${styles.seemorebtn}`}>
            See More
          </button>
        </div>
      </div>
      {ConfirmPurchaseOptions.show && (
        <Purchase
          bookName={ConfirmPurchaseOptions.bookName}
          bookImage={ConfirmPurchaseOptions.bookImage}
          price={ConfirmPurchaseOptions.price}
          bookId={ConfirmPurchaseOptions.bookId}
          buyerId={UserData?._id}
          sellerId={ConfirmPurchaseOptions.sellerId}
        />
      )}
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
