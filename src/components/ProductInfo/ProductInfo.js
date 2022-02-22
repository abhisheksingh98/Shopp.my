import React from "react";
import "./ProductInfo.scss";

function ProductInfo({ product }) {

  return (
    <div className="productInfo">
      <div className="productInfo__summary">
        <h1 className="productInfo__title">{product.name}</h1>
        <span className="productInfo__price">
          <strong>&#8377; {product.price}</strong>
        </span>
        <p className="productInfo__description">
          The product information is to be regarded as a document which contains
          information sufficient to ensure safe and effective use of the drug
          under nearly all circumstances. It is to present a scientific,
          objective account of the drug's usefulness and limitations as shown by
          the data supporting the application.
        </p>
      </div>
      <div className="productInfo__actions">
        <button type="submit" className="productInfo__addToCart">
          {"Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
