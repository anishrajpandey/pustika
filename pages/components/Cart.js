import { useContext } from "react";
import styles from "./../../styles/Cart.module.css";
import Context from "../context/Context";
const Cart = () => {
  const { IsCartOpen, setIsCartOpen } = useContext(Context);
  return (
    <div className={styles.main}>
      <div className={styles.cart}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        asperiores dolorum inventore ducimus voluptas ipsa ad? Ipsam, a
        inventore nostrum eaque illum eligendi quia quidem reiciendis culpa.
        Consectetur, corporis porro.
        <div
          className={styles.crossButton}
          onClick={() => {
            setIsCartOpen(!IsCartOpen);
          }}
        >
          <span>&times;</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
