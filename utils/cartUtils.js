export async function addToCart(id, url) {
  let data = await fetch(`${url}/api/addToCart`, {
    method: "POST",
    body: JSON.stringify({
      id: id,
    }),
  });
  const resjson = await data.json();

  return resjson.Book;
}
