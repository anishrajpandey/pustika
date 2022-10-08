import Image from "next/image";
import styles from "./../../styles/Purchase.module.css";
const Purchase = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={"/book-images/A Brief History of Time.webp"}
          layout={"fill"}
          alt={""}
        ></Image>
      </div>
    </div>
  );
};

export default Purchase;
