import { FC } from "react";

type ToastProps = {
  message: string;
  howSuccess: boolean;
};

export const Toast: FC<ToastProps> = ({ message, howSuccess }) => {
  return (
    <div
      className={`${howSuccess ? " bg-green-500" : "bg-red-500"} text-white px-4 py-2 rounded-md shadow-lg fixed top-4 left-1/2 -translate-x-1/2 flex items-center `}
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <p>{message}</p>
    </div>
  );
};
