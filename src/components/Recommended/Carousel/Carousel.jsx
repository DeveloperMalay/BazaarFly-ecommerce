import React, {  useState } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.scss";
import Data from "../Data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  // Create array with 500 slides
  // const [slides, setSlides] = useState(
  //   Data.map((_, index) => `Slide ${index + 1}`)
  // );

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        // centeredSlides={true}
        spaceBetween={25}
        pagination={true}
        navigation={true}
        virtual
        
      >
        {Data.map((slideContent, id) => (
          <SwiperSlide key={id} >
            <div className="product_card">
              <img src={slideContent.imgUrl} alt={slideContent.imgUrl} />
              <div className="details">
                <div className="offer">
                  <span className="save">{slideContent.save}</span>
                  <span>{slideContent.offer}</span>
                </div>
                <div className="price">
                  <p>{slideContent.currentPrice}</p>
                  <div className="pre_price">
                    <span>
                      {slideContent.prevPrice}
                      <p>
                        <span></span>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
