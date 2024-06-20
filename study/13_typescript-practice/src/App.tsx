import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Modal from "./assets/components/Modal";
import ModalControls from "./assets/components/Modal/ModalControls";
import queryClient from "./assets/react-query/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalControls />
      <Modal />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
// https://jsonplaceholder.typicode.com/posts
