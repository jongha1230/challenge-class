import { BASE_URL } from "./api";

export async function getProducts() {
  const endpoint = `${BASE_URL}/products`;
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log("data 1", data);
}

export async function getProduct(productId) {
  const endpoint = `${BASE_URL}/products/${productId}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log("data 1", data);
}
