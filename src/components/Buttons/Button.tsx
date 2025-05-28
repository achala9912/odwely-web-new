import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative overflow-hidden group
        px-6 py-2 rounded-full text-xl font-bold h-12
        bg-blue-300 text-white dark:bg-blue-80 dark:text-lightblack-200
        transition-colors duration-300 ease-in-out
        ${className}
      `}
    >
      {/* Angled animated overlay */}
      <span className="absolute z-0 transition-transform duration-500 ease-in-out origin-left transform scale-x-0 bg-gray-200 -inset-10 dark:bg-lightblack-200 -rotate-12 group-hover:scale-x-150" />

      {/* Text layer above */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-white">
        {children}
      </span>
    </button>
  );
};

export default Button;
