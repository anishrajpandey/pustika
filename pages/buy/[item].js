import { useEffect } from "react";
import { Router, useRouter } from "next/router";

const BuyItem = ({ url }) => {
  let Router = useRouter();
  let {
    query: { item: slug },
  } = Router;

  useEffect(() => {
    const requestAPI = (async () => {
      let res = await fetch(`${url}/api/getProductById`, {
        method: "POST",
        body: JSON.stringify({
          id: slug,
        }),
      });
      console.log(res);
      let data = await res.json();
      console.log(data);
    })();

    // .then((res) => {
    //   console.log(res);
    //   console.log(res.json());
    // })
    // .then((data) => console.log(data));
  }, []);

  return <div>{slug}</div>;
};
export async function getServerSideProps() {
  return {
    props: {
      url: process.env.PAGE_URL,
    },
  };
}
export default BuyItem;
