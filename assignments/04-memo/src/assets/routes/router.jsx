import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/memo/:memoId",
    element: <MainPage />,
  },
]);

export default router;
