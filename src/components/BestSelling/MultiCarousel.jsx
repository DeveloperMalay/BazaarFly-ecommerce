import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MultiCarousel.scss";
import Data from "./Data";
import { BsCart } from "react-icons/bs";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 720, min: 540},
    items:1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        breakpoints={{
          960: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
        }}
        // dotListClass="custom-dot-list-style"
      >
        {Data.map((item) => {
          return (
            <div className="slider" key={item.id}>
              <div className="image">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="product_detail">
                <p className="details">{item.details}</p>
                <span className="current_price">{item.currentPrice}</span>
                {/* <span className="prev_price">{item.prevPrice}</span> */}
                <div className="flex_items">
                  <div className="offer">
                    <span>{item.save}</span>
                    <p>{item.offer}</p>
                  </div>
                  <div className="cart_logo">
                    <span>
                      <BsCart />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
