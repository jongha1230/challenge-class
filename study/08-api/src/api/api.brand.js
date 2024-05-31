import { client } from "./api";

// 직접 사용하는 방법
// axios.get()
// axios.post()

// 커스텀 해서 사용하는 방법
// 커스텀 가능
// 여러 개의 나만의 인스턴스를 만들 수 있다.
// const myAxiosInstance = axios.create({baseURL: "https://www.naver.com"})
// const myAxiosInstance2 = axios.create({baseURL: "https://www.daum.net"})

export async function getBrands() {
  const endpoint = `/brands`;
  const response = await client.get(endpoint);
  const data = response.data;

  console.log("getBrands", data);
}

export async function getBrand(brandId) {
  const endpoint = `/brands/${brandId}`;
  const response = await client.get(endpoint);
  const data = response.data;

  console.log("getBrand", data);
}
