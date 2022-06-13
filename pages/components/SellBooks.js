/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./../../styles/SellBooks.module.css";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SellBooks = () => {
  const [Loading, setLoading] = useState(false);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const [Price, setPrice] = useState(0);
  const [CloudImageSource, setCloudImageSource] = useState("link");
  const previewImageRef = useRef();
  const inputFileRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imgUrl = await postToCloudinary();
    postToMongoDb(imgUrl);
    console.log(imgUrl);
  };

  const postToCloudinary = async () => {
    const formData = new FormData();

    formData.append("file", inputFileRef.current.files[0]);
    formData.append("upload_preset", "my-uploads");
    let data = await fetch(
      "https://api.cloudinary.com/v1_1/ddlejmdqj/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    let datajson = await data.json();

    console.log("type of imgurl outside function,", typeof datajson.secure_url);

    return datajson.secure_url;
  };
  const postToMongoDb = async (imgurl) => {
    let res = await fetch("http://localhost:3000/api/addBook", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookName: Name,
        description: Description,
        price: Price,
        imageURL: imgurl,
      }),
    });

    let resjson = await res.json();
    console.log("mongodb", resjson);
    setLoading(false);
  };
  const handleChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      previewImageRef.current.src = reader.result;
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
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className={styles.label} htmlFor="description">
            Description Of Book
          </label>
          <textarea
            rows="8"
            cols="40"
            id="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
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
            onChange={(e) => {
              setPrice(e.target.value);
            }}
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
