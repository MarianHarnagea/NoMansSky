import React from "react";
import "./purchase-buttons.scss";
import PS4 from "../../../images/home-imgs/logo-ps4.png";
import Steam from "../../../images/home-imgs/logo-steam.png";
import Xbox from "../../../images/home-imgs/logo-xbox-one.png";

export default function PurchaseButtons() {
  return (
    <div className="purchase-btns-container">
      <div className="purchase-btn">
        <a href="/">
          <img src={PS4} alt="ps4"></img>
        </a>
      </div>
      <div className="purchase-btn">
        <a href="/">
          <img src={Steam} alt="steam"></img>
        </a>
      </div>
      <div className="purchase-btn">
        <a href="/">
          <img src={Xbox} alt="xbox"></img>
        </a>
      </div>
    </div>
  );
}
