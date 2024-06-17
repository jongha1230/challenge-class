import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostForm from "./assets/components/Posts/PostForm";
import Posts from "./assets/components/Posts/Posts";
import queryClient from "./assets/react-query/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostForm />
      <hr />
      <Posts />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
// https://jsonplaceholder.typicode.com/posts
