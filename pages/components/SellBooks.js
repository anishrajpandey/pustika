import styles from "./../../styles/SellBooks.module.css";
import { useState } from "react";
import Image from "next/image";

const SellBooks = () => {
  const [Loading, setLoading] = useState(false);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const [Price, setPrice] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className={styles.mainContainer}>
      {/* <Image src={"/loader.gif"} width={300} height={400}></Image> */}
      <h1 className={styles.heading}>Add your Book to Store</h1>
      {Loading && <Image src={"/loader.gif"} width={500} height={500}></Image>}
      {!Loading && (
        <form className={styles.form} action="/" onSubmit={handleSubmit}>
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
      )}
    </div>
  );
};

export default SellBooks;
