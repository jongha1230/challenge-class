import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "../pages/Homepage/Homepage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import PostDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostsListPage from "../pages/PostsListPage/PostsListPage";
import postsListPageLoader from "../pages/PostsListPage/PostsListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostsListPage />,
        loader: postsListPageLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: PostDetailPageLoader,
      },
    ],
  },
]);

export default router;
