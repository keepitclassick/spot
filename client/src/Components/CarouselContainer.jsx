import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselContainer() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={"./images/carouselItem1.jpg"}
          alt="First slide"
          size="large"
          height="650px"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={"./images/carouselItem2.jpg"}
          alt="Second slide"
          size="large"
          height="650px"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={"./images/carouselItem3.jpg"}
          alt="Third slide"
          size="large"
          height="650px"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselContainer;
