import { useEffect, useState } from "react";
import imageArray from "../../public/BooksData";

const Store = () => {
  var [datajson, setdatajson] = useState();
  useEffect(async () => {
    let data = await fetch("http://localhost:3000/api/books");
    let { imageArray } = await data.json();
    setdatajson(imageArray);
  }, []);
  console.log(typeof datajson);
  // for (let element of {datajson}) {
  //   console.log(element);
  // }
  return (
    <>
      <div className="store"></div>
    </>
  );
};

export default Store;
