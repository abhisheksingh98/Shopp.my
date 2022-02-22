import React from "react";
import "./productColors.scss";

const productColors = ({ colors }) => {
  const handleClick = (e) => {
  };

  return (
    <div className="productColors">
      {colors.map((color) => (
        <button
          className="productColor"
          onClick={handleClick}
          style={{ backgroundColor: `${color}` }}
          key={color}
        ></button>
      ))}
    </div>
  );
};

export default productColors;
