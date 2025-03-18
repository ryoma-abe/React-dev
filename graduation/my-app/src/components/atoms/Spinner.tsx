import { FC } from "react";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  color?: string;
};

export const Spinner: FC<SpinnerProps> = ({
  size = "md",
  color = "border-blue-500",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`
          ${sizeClasses[size]}
          ${color}
          border-4
          border-t-transparent
          rounded-full
          animate-spin
        `}
      />
    </div>
  );
};
