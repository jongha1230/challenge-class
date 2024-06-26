import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./assets/routes/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
