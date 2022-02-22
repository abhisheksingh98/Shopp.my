import React from 'react';
import './ProductView.css';

function ProductView({ images }) {
  return (
    <div className="productView">
      <div className="productView__imagePlane">
        <img className="productView__main" src={images} />
      </div>
    </div>
  );
}

export default ProductView;
