import React from "react";
import "./Valentine.scss";
import pic from "./animation.svg"

const Valentine = () => {
  return (
    <>
      <div className="valentine_container">
        <div className="animation">
          <img src={pic} alt="" />
        </div>
        <div className="para">
          <h2>Happy Valentine's Day</h2>
          <p>Check Out Festive Special Items</p>
          <button>Click here</button>
        </div>
      </div>
    </>
  );
};

export default Valentine;
