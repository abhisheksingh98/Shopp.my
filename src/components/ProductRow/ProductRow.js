import React, { useRef } from "react";
import "./ProductRow.scss";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";

function ProductRow({ title, items }) {
  const history = useHistory();

  const arrowEl = useRef(null);

  const handleNextClick = () => {
    arrowEl.current.scrollLeft += 260;
  };

  const handlePrevClick = () => {
    arrowEl.current.scrollLeft -= 260;
  };
  return (
    <div className="productRow">
      <h2>{title}</h2>

      <div className="productRow__itemsContainer">
        <div className="productRow__leftButton" onClick={handlePrevClick}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </div>

        <div ref={arrowEl} className="productRow__items">
          {items.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
        </div>
        <div className="productRow__leftButton" onClick={handleNextClick}>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProductRow;
