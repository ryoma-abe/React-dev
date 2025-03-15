import { FC, ReactNode } from "react";

type PrimaryButtonType = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export const PrimaryButton: FC<PrimaryButtonType> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
