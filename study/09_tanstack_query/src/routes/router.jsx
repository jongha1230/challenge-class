import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "../pages/Homepage";
import ProductDetailPage from "../pages/ProductDetailPage";
import TodoPage from "../pages/TodoPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailPage />,
      },
      { path: "/todo", element: <TodoPage /> },
    ],
  },
]);

export default router;
