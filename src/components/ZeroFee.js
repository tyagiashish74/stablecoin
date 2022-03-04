import React from "react";
import zerofee from "./images/zerofee.webp";
import "./ZeroFee.css";

function ZeroFee() {
  return (
    <div className="zero-fee-platform">
      <div className="img-div-zero-fee-container" >
        <img src={zerofee} alt="Zero fee"  className="img-zero-fee" />
      </div>
      <div className="text-div-zero-fee-container">
        <h2>Pay Nothing when you</h2>
        <span>Buy</span><span>Sell</span><span>Depsoit</span>
        <span>withdraw</span>
      </div>
    </div>
  );
}
export default ZeroFee;
