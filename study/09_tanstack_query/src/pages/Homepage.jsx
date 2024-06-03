import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function Homepage() {
  // 쿼리 키는 배열로 만든다.
  // 첫 번째 요소는 데이터의 모델 명으로 넣는다. (string)
  // 쿼리 키 두 번째 요소는 데이터 설명하는 정보 object로 넣는다.
  // 쿼리 함수에는 항상 프로미스를 넣어줘야 한다.
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.products.getProducts(),
  });

  if (isLoadingProducts) return <Page>loading...</Page>;
  if (isErrorProducts) return <Page>error...</Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}

export default Homepage;
