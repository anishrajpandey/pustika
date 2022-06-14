/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./../../styles/SellBooks.module.css";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SellBooks = () => {
  const [Loading, setLoading] = useState(false);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState();
  const [image, setimage] = useState();
  const [Price, setPrice] = useState(0);

  const previewImageRef = useRef();
  const inputFileRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setimage(inputFileRef.current);
    const imgUrl = await postToCloudinary(); //idk how but postToCloudinary returns a promise instead of string
    postToMongoDb(imgUrl);
    console.log("Successfully posted");
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

    return datajson.secure_url; //returning the public image uri to use in connectToMongoDB function
  };
  const postToMongoDb = async (imgurl) => {
    await fetch("http://localhost:3000/api/addBook", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //setting the contents of collection (document)
        bookName: Name,
        description: Description,
        price: Price,
        imageURL: imgurl,
      }),
    });

    setLoading(false);
  };
  const handleChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    setimage(file.name);
    reader.onloadend = () => {
      previewImageRef.current.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  //function for validating the user Entered Data in form
  const validateData = (e) => {
    if (!Name) {
      e.preventDefault();
      alert("Enter The Book Name");
    } else if (!Description) {
      e.preventDefault();
      alert("Enter The Book Description");
    } else if (!Image) {
      e.preventDefault();
      alert("Please upload an image");
    } else if (!image) {
      e.preventDefault();
      alert("Please upload an image");
    } else if (!Price) {
      e.preventDefault();
      alert("Specify the price");
    }
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
          <br />
          <p> Loading...</p>
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
          <button
            type={"submit"}
            className={`${styles.sellbtn} btn-primary`}
            onClick={validateData}
          >
            Add to selling list
          </button>
        </form>
      )}
    </div>
  );
};

export default SellBooks;
