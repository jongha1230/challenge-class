import { AxiosInstance } from "axios";
import { GetCartData } from "./cart.type";

class CartAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  // getCart: 사용자의 장바구니 내용을 제공합니다.
  async getCart() {
    const path = "/cart";

    const response = await this.axios.get<GetCartData>(path);
    const result = response.data;
    result.result.items[0].cartId;

    return result;
  }

  // addItemToCart: 사용자의 장바구니에 상품을 추가합니다.
  async addItemToCart(productId: number) {
    const path = `/cart/products/${productId}`;

    const response = await this.axios.post(path);
    const result = response.data.result;

    return result;
  }

  // removeItemFromCart: 사용자의 장바구니에서 상품을 차감합니다.
  async removeItemFromCart(productId: number) {
    const path = `/cart/products/${productId}`;

    const response = await this.axios.delete(path);
    const result = response.data.result;

    return result;
  }

  // clearItemInCart: 사용자의 장바구니에서 상품을 제거합니다.
  async clearItemInCart(productId: number) {
    const path = `/cart/products/${productId}/clear`;

    const response = await this.axios.delete(path);
    const result = response.data.result;

    return result;
  }
}

export default CartAPI;
