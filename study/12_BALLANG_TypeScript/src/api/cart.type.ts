export type GetCartData = {
  error: null;
  success: boolean;
  result: { id: number; items: CartItem[] };
};

export type CartItem = {
  cartId: number;
  createAt: string;
  id: number;
  product: any;
  productId: number;
  quantity: number;
  updateAt: string;
};
