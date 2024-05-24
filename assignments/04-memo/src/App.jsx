import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./GlobalStyle";
import router from "./assets/routes/router";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
