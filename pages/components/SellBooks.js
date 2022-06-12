/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./../../styles/SellBooks.module.css";
import { useState, useRef } from "react";
import Image from "next/image";

const SellBooks = () => {
  const [Loading, setLoading] = useState(false);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const [Price, setPrice] = useState(0);
  const [LocalImageSource, setLocalImageSource] = useState();
  const previewImageRef = useRef();
  const inputFileRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", `inputFileRef.current.files[0]`);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log(formData);
  };
  const handleChange = (e) => {
    let reader = new FileReader();
    const file = e.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      previewImageRef.current.src = reader.result;
      console.log(reader.result);
      setLocalImageSource(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>Add your Book to Store</h1>
      {Loading && (
        <div className={styles.loaderContainer}>
          <Image
            alt="sd"
            src={"/loader.gif"}
            width={700}
            height={500}
            id={styles.loaderImage}
          ></Image>
        </div>
      )}
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
          <input
            type="file"
            id="image"
            accept="image/*"
            name="bookImage"
            onChange={handleChange}
            ref={inputFileRef}
          />

          <img src="" ref={previewImageRef} width={400}></img>
          <label className={styles.label} htmlFor="price">
            Price
          </label>
          <input
            type="number"
            className={`${styles.price}`}
            id="price"
            placeholder="Rs.XXX"
          />
          <button type={"submit"} className={`${styles.sellbtn} btn-primary`}>
            Add to selling list
          </button>
        </form>
      )}
    </div>
  );
};

export default SellBooks;
/*
curl https://api.cloudinary.com/v1_1/demo/image/upload -X POST --data 'file=https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg&public_id=olympic_flag&timestamp=12345678&api_key=98765432&signature=a123456f987664af'
*/
