import React from "react";
import "./BestSelling.scss";
import Data from "./Data";
import { BsCart } from "react-icons/bs";
const Bestselling = () => {
  return (
    <div>
      <div className="bestSelling_container">
        <div className="best_products">
          <div className="header">
            <p>
              Best Selling<span></span>
            </p>
            <p className="redBorder"></p>
          </div>

          <div className="cards">
            {/* {Data.map((item) => (
              <div className="product_card">
                <div className="image">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="product_detail">
                  <p className="details">{item.details}</p>
                  <span className="current_price">{item.currentPrice}</span>
                  <span className="prev_price">{item.prevPrice}</span>
                  <div className="offer">
                    <p>{item.save}</p>
                    <span>{item.offer}</span>
                  </div>
                  <div className="cart_logo">
                    <span>
                      <BsCart />
                    </span>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestselling;
