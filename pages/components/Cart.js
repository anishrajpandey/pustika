import { useContext, useEffect } from "react";
import styles from "./../../styles/Cart.module.css";
import Context from "../../utils/Context";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { IsCartOpen, setIsCartOpen, CartItems, setCartItems } =
    useContext(Context);
  function numberOfRepetion(arr, elem) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        count++;
      }
    }
    return count;
  }
  function removeDuplicates(arr) {
    console.log(arr);
    let arrayOfIndex = [];
    for (let i = 0; i < arr.length; i++) {
      arrayOfIndex.push(arr[i]._id);
    }
    let uniqueIndex = [];
    arrayOfIndex.forEach((e) => {
      if (!uniqueIndex.includes(e)) {
        uniqueIndex.push(e);
      }
    });

    for (let i = 0; i < uniqueIndex.length; i++) {
      arr.find((e) => e._id === uniqueIndex[i]).quantity = numberOfRepetion(
        arrayOfIndex,
        uniqueIndex[i]
      );
    }
    let newArr = arr.filter((e) => e.quantity);
    setCartItems(newArr);
  }

  useEffect(() => {
    setIsCartOpen(true);
    removeDuplicates(CartItems);
  }, []);
  function handleIncrease(obj) {
    obj.quantity++;
    console.log(obj.quantity);
    setCartItems(CartItems);
  }
  const handleClearCart = () => {
    localStorage.clear();

    location.reload();
  };

  return (
    <div className={styles.main}>
      <div className={styles.cart}>
        <h1>My Cart</h1>
        {CartItems?.map((e) => {
          return (
            <div className={styles.cartItem} key={Math.random()}>
              <div className={styles.imageContainer}>
                <Image
                  src={e.imageURL || "/loader.gif"}
                  width={200}
                  height={300}
                  alt="Image not available"
                ></Image>
              </div>
              <div className={styles.cartContent}>
                <h2>{e.bookName}</h2>
                <div className={styles.quantityBox}>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      handleIncrease(e);
                    }}
                  >
                    -
                  </button>
                  <span>{e.quantity}</span>
                  <button className="btn-primary">+</button>
                </div>

                <h3>
                  Price: <span>Rs.{e.price}</span>
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

          <button className="btn-primary" onClick={handleClearCart}>
            Clear All
          </button>
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
