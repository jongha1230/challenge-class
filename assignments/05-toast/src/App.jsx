import ToastForm from "./components/ToastForm";
import ToastList from "./components/ToastList";
import { ToastProvider } from "./contexts/toast.context";

function App() {
  return (
    <ToastProvider>
      <main className="h-screen grid place-content-center ">
        <ToastForm />
        <ToastList />
      </main>
    </ToastProvider>
  );
}

export default App;
