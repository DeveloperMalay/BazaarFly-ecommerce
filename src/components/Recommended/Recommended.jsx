import React from "react";
import "./Recommended.scss";
// import Data from "./Data";
import Carousel from "./Carousel/Carousel";
const Recommended = () => {
  return (
    <>
      <div className="products_container">
        <div className="header">
          <p>
            Recommended For You <span></span>
          </p>
          <p className="redBorder"></p>
        </div>

        {/* <div className="cards"> */}
        {/* {Data.map((item) => (
            <div className="product_card">
              <img src={item.imgUrl} alt={item.imgUrl} />
              <div className="details">
                <div className="offer">
                  <span className="save">{item.save}</span>
                  <span>{item.offer}</span>
                </div>
                <div className="price">
                  <p>{item.currentPrice}</p>
                  <div className="pre_price">
                    <span>
                      {item.prevPrice}
                      <p>
                        <span></span>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))} */}

        {/* </div> */}
        <Carousel />
      </div>
    </>
  );
};

export default Recommended;
