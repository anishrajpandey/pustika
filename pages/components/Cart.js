import { useContext, useEffect } from "react";
import styles from "./../../styles/Cart.module.css";
import Context from "../../utils/Context";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { IsCartOpen, setIsCartOpen, CartItems } = useContext(Context);
  function removeDuplicates(arr) {
    let arrayofIndex = [];
    arr.forEach((e) => {
      arrayofIndex.push(e._id);
    });
    for (let i = 0; i < arrayofIndex.length; i++) {
      let currId = arrayofIndex[i];
      for (letj = 0; j < arrayofIndex.length; j++) {
        if (currId === arrayofIndex[j]) {
          arr[i].quantity++;
        }
      }
      arr[i].quantity = count || 0;
    }
  }

  useEffect(() => {
    setIsCartOpen(true);
  }, []);
  const handleClearCart = () => {
    localStorage.clear();

    location.reload();
  };
  // function filterDuplicateItems(arr) {
  //   let arrOfId = [];
  //   arr.forEach((e) => {
  //     arrOfId.push(e._id);
  //     console.log(arrOfId);
  //   });
  //   for (let i = 0; i < arr.length; i++) {
  //     let currId = arrOfId[i]._id;
  //     let count = 0;
  //     for (let j = 0; j < arrOfId.length; j++) {
  //       if (currId === arrOfId[j]._id) {
  //         count++;
  //       }
  //     }
  //   }
  // }

  return (
    <div className={styles.main}>
      <div className={styles.cart}>
        <h1>My Cart</h1>
        {CartItems?.map(({ _id, bookName, price, imageURL }) => {
          return (
            <div className={styles.cartItem} key={Math.random()}>
              <div className={styles.imageContainer}>
                <Image
                  src={imageURL || "/loader.gif"}
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
          <button
            className="btn-primary"
            onClick={() => {
              console.log(CartItems);
              filterDuplicateItems(CartItems);
            }}
          >
            logdfsdg
          </button>
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
