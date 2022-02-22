import React from "react";
import ProductRating from "../ProductRating/ProductRating";
import "./Review.scss";

const Review = ({ reviewData = {} }) => {
  const reviewContent =
    "Good product";

  const {
    name = "Test User",
    date = "20-07-2021",
    rating = 3.5,
    content = reviewContent,
  } = reviewData;
  return (
    <div className="review">
      <div className="reviewHeader">
        <h4 className="custName">{name}</h4>
        <div className="ratingDate">
          <ProductRating rating={rating} />
          <div className="Date">{date}</div>
        </div>
      </div>
      <p className="reviewContent">{content}</p>
    </div>
  );
};

export default Review;
