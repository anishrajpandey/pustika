import { useContext, useEffect } from "react";
import styles from "./../../styles/Cart.module.css";
import Context from "../../utils/Context";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { IsCartOpen, setIsCartOpen, CartItems } = useContext(Context);

  useEffect(() => {
    setIsCartOpen(true);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.cart}>
        <h1>My Cart</h1>
        {CartItems?.map(({ _id, bookName, price, isOnCart, imageURL }) => {
          return (
            <div className={styles.cartItem} key={Math.random()}>
              <div className={styles.imageContainer}>
                <Image
                  src={imageURL}
                  width={200}
                  height={300}
                  alt="Image not available"
                ></Image>
              </div>
              <div className={styles.cartContent}>
                <h2>{bookName}</h2>
                <div className={styles.quantityBox}>
                  <button className="btn-primary">-</button>
                  <span>3</span>
                  <button className="btn-primary">+</button>
                </div>

                <h3>
                  Price: <span>Rs.{price}</span>
                </h3>
                <div className={styles.btnArea}>
                  <button>Buy Now</button>
                  <button title="Remove from Cart">
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "white" }}
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles.total}>
          <h2>Total:</h2>
          <h2>13 Items</h2>
          <h2>Rs. 99987</h2>
          <button className="btn-primary">Purchase All</button>
        </div>
      </div>
      <div
        className={styles.crossButton}
        onClick={() => {
          setIsCartOpen(!IsCartOpen);
        }}
      >
        <span>&times;</span>
      </div>
    </div>
  );
};

export default Cart;
