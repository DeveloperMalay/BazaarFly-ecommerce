import React from "react";
import "./BestSelling.scss";
import Data from "./Data";
import { BsCart } from "react-icons/bs";
import MultiCarousel from "./MultiCarousel";
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
            <div className="top_20">
              <span>Top 20</span>
            </div>
          </div>
          <MultiCarousel />
          <div className="card1">
            <div className="product_card">
              <div className="image">
                <img
                  src="https://bazaarfly.com//storage/app/public/8258/conversions/IMG-20210606-WA0019-featured_img.jpg"
                  alt=""
                />
              </div>
              <div className="product_detail">
                <p className="details">Oriflame Love Nature Orange Face Wash</p>
                <span className="current_price">Rs235.00</span>
                <span className="prev_price"></span>
                <div className="offer">
                  <p></p>
                  <span></span>
                </div>
                <div className="cart_logo">
                  <span>
                    <BsCart />
                  </span>
                </div>
              </div>
            </div>

            <div className="product_card">
              <div className="image">
                <img
                  src="https://bazaarfly.com//storage/app/public/5061/conversions/61FNy0b3SlL._SL1000_-featured_img.jpg"
                  alt=""
                />
              </div>
              <div className="product_detail">
                <p className="details">Tata Sampann Turmeric Powder Masala</p>
                <span className="current_price">Rs200.00</span>
                <span className="prev_price"></span>
                <div className="offer">
                  <p></p>
                  <span></span>
                </div>
                <div className="cart_logo">
                  <span>
                    <BsCart />
                  </span>
                </div>
              </div>
            </div>

            <div className="product_card">
              <div className="image">
                <img
                  src="https://bazaarfly.com//storage/app/public/8258/conversions/IMG-20210606-WA0019-featured_img.jpg"
                  alt=""
                />
              </div>
              <div className="product_detail">
                <p className="details">Oriflame Love Nature Orange Face Wash</p>
                <span className="current_price">Rs235.00</span>
                <span className="prev_price"></span>
                <div className="offer">
                  <p></p>
                  <span></span>
                </div>
                <div className="cart_logo">
                  <span>
                    <BsCart />
                  </span>
                </div>
              </div>
            </div>

            <div className="product_card">
              <div className="image">
                <img
                  src="https://bazaarfly.com//storage/app/public/5061/conversions/61FNy0b3SlL._SL1000_-featured_img.jpg"
                  alt=""
                />
              </div>
              <div className="product_detail">
                <p className="details">Tata Sampann Turmeric Powder Masala</p>
                <span className="current_price">Rs200.00</span>
                <span className="prev_price"></span>
                <div className="offer">
                  <p></p>
                  <span></span>
                </div>
                {/* <div className="cart_logo">
                  <span>
                    <BsCart />
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestselling;
