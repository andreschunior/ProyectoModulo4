"use client";
import React, { useState } from "react";
import categoriasProps from "./type";

interface CategoriasProps extends categoriasProps {
  categoryId: number;
  onFilter: (categoryId: number) => void;
}

const Categorias: React.FC<CategoriasProps> = ({ imagen, name, categoryId, onFilter }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleMouseEnter = () => {
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  const handleClick = () => {
    onFilter(categoryId);
    console.log(categoryId);
    
  };

  return (
    <div className="categoria-container">
      <img
        className="w-20 h-20 rounded-full ml-10 mr-3 mt-12 cursor-pointer"
        src={imagen}
        alt="categoria"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
      {showPopover && (
        <div className="popover flex justify-center">
          <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700 mt-2 ml-4">
            <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorias