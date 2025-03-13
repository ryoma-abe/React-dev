import { FC, ReactNode } from "react";

type PrimaryButtonType = {
  children: ReactNode;
};

export const PrimaryButton: FC<PrimaryButtonType> = ({ children }) => {
  return (
    <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors">
      {children}
    </button>
  );
};
