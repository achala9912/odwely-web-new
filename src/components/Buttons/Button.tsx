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
        bg-blue-300 text-white 
        dark:bg-blue-80 dark:text-lightblack-200 
        font-semibold px-6 py-2 rounded-full text-xl 
        hover:bg-gray-200 hover:text-gray-700 
        dark:hover:bg-lightblack-200 dark:hover:text-white 
        transition-colors duration-300 ease-in-out 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
