import React from "react";
import "./Carousel.scss";
import { Carousel } from "react-bootstrap";
import data from "./CarouselData";

function CarouselView() {
  return (
    <div className="container-fluid carousel-wrapper">
      <Carousel>
        {data["carousel-images"].map((item) => {
          return (
            <Carousel.Item key={item}>
              <img
                className="d-block w-100"
                src={item}
                alt="First slide"
                width="100%"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselView;
