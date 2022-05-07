import { useEffect, useState } from "react";
import styles from "./../../styles/Store.module.css";
import Image from "next/image";
import DummyImage from "../../public/book-images/Atomic Habits.webp";

const Store = () => {
  var [datajson, setdatajson] = useState("");
  useEffect(async () => {
    let data = await fetch("http://localhost:3000/api/books");
    let { imageArray } = await data.json();
    setdatajson(imageArray);
  }, []);
  console.log(datajson);
  return (
    <>
      <div className={styles.AllItems}>
        <div className={styles.item}>
          <Image src={DummyImage} />
        </div>
      </div>
    </>
  );
};

export default Store;
