import clsx from "clsx";
import { useToast } from "../contexts/toast.context";

function ToastList() {
  const { toasts, closeToast } = useToast();

  return (
    <ul className="fixed flex flex-col bottom-0 right-0 p-4 space-y-2">
      {toasts.map((toast) => (
        <li
          key={toast.id}
          className={clsx("bg-white p-6 rounded w-[320px] shadow-lg", {
            "animate-slideIn": !toast.leaving,
            "animate-slideOut": toast.leaving,
            "translate-x-[calc(100%+24px)]": toast.leaving,
          })}
        >
          <div className=" grid grid-cols-[1fr_auto] items-center gap-4">
            <h6 className="font-semibold text-sm break-all">{toast.title}</h6>
            <button
              className="inline-flex items-center px-3 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 "
              onClick={() => closeToast(toast.id)}
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
          <p className="break-all">{toast.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default ToastList;
