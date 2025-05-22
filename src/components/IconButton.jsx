import React from "react";

const IconButton = ({ children, overrideStyle = "" }) => {
  return (
    <button
      type="button"
      className={`cursor-pointer p-2 rounded-full text-menu hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out ${overrideStyle} `}
    >
      {children}
    </button>
  );
};

export default IconButton;
