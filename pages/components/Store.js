import { useEffect } from "react";

const Store = () => {
  useEffect(async () => {
    let data = await fetch("http://localhost:3000/api/books");
    let datajson = await data.json();

    console.log(datajson);
  }, []);
  return (
    <>
      <div className="store"></div>
    </>
  );
};

export default Store;
