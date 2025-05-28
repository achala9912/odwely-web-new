import React from "react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
  onClick,
}) => {
  return (
    <div className="relative group lg:min-w-[400px] w-full p-6 bg-gray-80 rounded-xs shadow-sm overflow-hidden !font-outfit dark:bg-lightblack-100">
      {/* Animated curtain layer */}
      <div className="absolute inset-0 z-0 transition-transform duration-500 origin-left transform scale-x-0 bg-blue-300 dark:bg-blue-80 group-hover:scale-x-100" />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col text-left transition-colors duration-300 group-hover:text-white">
        <div className="w-16 h-16 mb-4 text-blue-300 transition-colors duration-300 group-hover:text-white dark:text-blue-80">
          {icon}
        </div>
        <h3 className="capitalize text-[26px] font-bold mb-3 text-lightblack-400 group-hover:text-white transition-colors duration-300 dark:text-gray-210">
          {title}
        </h3>
        <p className="text-[16px] text-gray-600 mb-4 h-[96px] group-hover:text-gray-100 transition-colors duration-300 dark:text-gray-75">
          {description}
        </p>
        <button
          className="text-[20px] text-blue-300 font-medium group-hover:text-white transition-colors text-left dark:text-blue-80"
          onClick={onClick}
        >
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
