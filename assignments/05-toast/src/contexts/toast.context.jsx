import { createContext, useCallback, useContext, useState } from "react";

const initialValue = {
  addToast: () => {},
  removeToast: () => {},
  showToast: () => {},
};

export const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    setToasts((prevToasts) => [...prevToasts, { ...toast, leaving: false }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === id ? { ...toast, leaving: true } : toast
      )
    );
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 500);
  }, []);
  const showToast = useCallback(
    ({ title, content, duration = 2000 }) => {
      const id = Date.now();
      addToast({ id, title, content });
      setTimeout(() => removeToast(id), duration);
    },
    [addToast, removeToast]
  );

  const closeToast = (id) => {
    removeToast(id);
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, closeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
