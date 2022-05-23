import React from "react";
import "./Sponsord.scss";
import { images } from "../../constants/index";

const Sponsord = () => {
  return (
    <>
    <div className="sponserd_tag">
      <span>Sponsord By</span>
    </div>
      <div className="sponsord_container">
        <div className="sponsord_image">
          <img src={images.spnrd1} alt="" />
        </div>
        <div className="sponsord_image">
          <img src={images.spnrd2} alt="" />
        </div>
        <div className="sponsord_image">
          <img src={images.spnrd3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sponsord;
