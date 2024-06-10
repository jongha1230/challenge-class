import axios, { AxiosInstance } from "axios";
import Auth_API from "./auth.ap";
import Brands_API from "./brands.api";
import Cart_API from "./cart.api";
import Products_API from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com";

class API {
  private axios: AxiosInstance;

  auth;
  brands;
  cart;
  products;

  constructor() {
    this.axios = axios.create({ baseURL: BASE_URL, withCredentials: true });

    this.auth = new Auth_API(this.axios);
    this.brands = new Brands_API();
    this.cart = new Cart_API(this.axios);
    this.products = new Products_API(this.axios);
  }

  setAccessToken(accessToken: string) {
    this.axios.defaults.headers.common.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : "";
  }
}
const api = new API();
export default api;
