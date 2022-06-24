import { useContext } from "react";
import styles from "./../../styles/Cart.module.css";
import Context from "../context/Context";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { IsCartOpen, setIsCartOpen } = useContext(Context);
  return (
    <div className={styles.main}>
      <div className={styles.cart}>
        <h1>My Cart</h1>
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
        <div className={styles.cartItem}>
          <div className={styles.imageContainer}>
            {/* image Here */}
            <Image
              src={"/coverBackground.jpg"}
              width={300}
              height={200}
              alt="Image not available"
            ></Image>
          </div>
          <div className={styles.cartContent}>
            <h2>Item Heading</h2>
            <div className={styles.quantityBox}>
              <button className="btn-primary">-</button>
              <span>3</span>
              <button className="btn-primary">+</button>
            </div>

            <h3>
              Price: <span>Rs.6900</span>
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
