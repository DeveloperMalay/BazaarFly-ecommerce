import React from "react";
import ClothesData from "./ClothesData";
import "./Clothes.scss";
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
const Books = () => {
  return (
    <>
      <div className="clothes_container">
        <div className="header">
          <p>
            Cloth and Fashion Wear<span></span>
          </p>
          <p className="redBorder"></p>
        </div>
        <div className="other_headers">
          <span>See More</span>
          <div className="right_side_btn">
            <span className="red_box">Under Rs 499 </span>
            <span className="white_box">Under Rs 499 </span>
            <span className="white_box">Rs 500-999</span>
          </div>
        </div>

        <div className="books">
          {ClothesData.map((item) => (
            <div className="books_card">
              <img src={item.imgUrl} alt="" />
              <div className="hover_effect">
              <div className="hover_icons">
                  <span>
                    <AiOutlineHeart />
                  </span>
                  <span>
                    <BsArrowRepeat />
                  </span>
                  <span>
                    <AiOutlineEye />
                  </span>
                </div>
              </div>
              <div className="books_details">
                <p>{item.name}</p>
                <div className="stars">
                  <span>
                    <AiFillStar /> <AiFillStar /> <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <div className="price">
                  <span className="current_price">{item.currentPrice}</span>
                  <span className="prev_price">
                    {item.prevPrice}
                    <p>
                      <span></span>
                    </p>
                  </span>
                </div>
                <div className="offer">
                  <span className="save">{item.save}</span>
                  <span className="off">{item.offer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
