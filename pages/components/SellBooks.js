import styles from "./../../styles/SellBooks.module.css";

const SellBooks = () => {
  return (
    <div>
      <h1 className={styles.heading}>Add your Book to Store</h1>
      <form className={styles.form} action="/">
        <label className={styles.label} htmlFor="name">
          Name Of Book
        </label>
        <input type="text" id="name" />
        <label className={styles.label} htmlFor="description">
          Description Of Book
        </label>
        <textarea rows="8" cols="40" id="description" />
        <label className={styles.label} htmlFor="image">
          Image<i> (portrait)</i>
        </label>
        <input type="file" id="image" />
        <label className={styles.label} htmlFor="price">
          Price<i>(in numbers)</i>
        </label>
        <input type="number" className={`${styles.price}`} id="price" />

        <button type={"submit"} className={`${styles.sellbtn} btn-primary`}>
          Add to selling list
        </button>
      </form>
    </div>
  );
};

export default SellBooks;
