import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/memo/:memoId",
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
