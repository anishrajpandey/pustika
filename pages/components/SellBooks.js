import styles from "./../../styles/SellBooks.module.css";

const SellBooks = () => {
  return (
    <div>
      <h1>Enter book info</h1>
      <label className={styles.label} htmlFor="name">
        Name Of Book
      </label>
      <input type="text" id="name" />
      <label className={styles.label} htmlFor="description">
        Description Of Book
      </label>
      <input type="text" id="description" />
      <label className={styles.label} htmlFor="image">
        Image
      </label>
      <input type="file" id="image" />
      <label className={styles.label} htmlFor="price">
        Price
      </label>
      <input type="number" id="price" />
    </div>
  );
};

export default SellBooks;
