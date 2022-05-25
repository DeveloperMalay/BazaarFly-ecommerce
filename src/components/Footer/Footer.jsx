import React from "react";
import "./Footer.scss";
import { AiOutlineDoubleRight, AiFillFacebook } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="btn">
        <span>
          More
          <AiOutlineDoubleRight />
        </span>
        <span>
          Policy <AiOutlineDoubleRight />
        </span>
      </div>
      <p>© 2022 BazaarFLY - Bazaarfly jo kare har zarurat ko pura </p>

      <a href="/">Terms</a>
      <a href="/"> Privacy policy </a>

      <div className="share_link">
        <span>
          <a href="/">
            <BsLink45Deg />
          </a>
        </span>
        <p className="link">Share This Page</p>
      </div>

      <div className="social_media">
        <span className="facebook">
          <AiFillFacebook />
        </span>
        <span className="whatsapp">
          <FaWhatsappSquare />
        </span>
      </div>
      <div className="buttons">
        <div className="row1">
          <span>1 to 5 Day Delivery</span>
          <span>Collect Point</span>
        </div>
        <div className="row2">
          <span>100% Original Product</span>
          <span>Made in India</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
