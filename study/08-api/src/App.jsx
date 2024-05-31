import { getBrand, getBrands } from "./api/api.brand";
import { getProduct, getProducts } from "./api/api.product";

function App() {
  const productId = 9587059;
  const brandtId = 115;

  getProduct(productId);
  getProducts();

  getBrand(brandtId);
  getBrands();
  return <div>Hello world</div>;
}

export default App;
