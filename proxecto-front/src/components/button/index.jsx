import React from "react";

const CustomButton = ({ children, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#d4af37] font-semibold text-white p-2 rounded hover:bg-[#b5942f] transition-colors duration-200 flex items-center justify-center gap-2"
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;