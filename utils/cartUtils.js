export default async function addToCart(id, url) {
  let data = await fetch(`${url}/api/getProductById`, {
    method: "POST",
    body: JSON.stringify({
      id: id,
    }),
  });
  const resjson = await data.json();

  return resjson.data;
}
