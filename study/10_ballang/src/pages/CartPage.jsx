import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });

  const {} = (productId) => async () => {
    await removeItemFromCart(productId);

    alert("상품이 장바구니에서 제거되었습니다.");
  };

  const handleClickRemoveCart = (productId) => {
    () => {
      // 장바구니 추가하는 로직
      addItemToCart(productId, {
        onSuccess: () => {
          alert("상품에 제거되었습니다.");
        },
      });
    };
  };

  return (
    <div>
      <h1>장바구니</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <ul style={{ textAlign: "left" }}>
          {cart.map((cartItem) => (
            <li key={cartItem.id}>
              <h5>{cartItem.product.name}</h5>
              <button onClick={handleClickRemoveCart(cartItem.id)}>
                장바구니에 추가하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
