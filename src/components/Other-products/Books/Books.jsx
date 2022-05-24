import React from "react";
import BooksData from "./BooksData";
import "./Books.scss";
import { AiFillStar } from "react-icons/ai";
const Books = () => {
  return (
    <>
      <div className="books_container">
        <div className="header">
          <p>
            Book And Study Material<span></span>
          </p>
          <p className="redBorder"></p>
        </div>
        <div className="books">
          {BooksData.map((item) => (
            <div className="books_card">
              <img src={item.imgUrl} alt="" />
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
                  <span className="prev_price">{item.prevPrice}</span>
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
