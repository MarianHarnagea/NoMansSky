import React from "react";
import "../styles/buy.scss";
import HeadingBorderCenter from "../images/Buy-Imgs/heading-border-center.png";
import LogoXboxStore from "../images/Buy-Imgs/logo-xbox-store.png";
import LogoPSStore from "../images/Buy-Imgs/logo-psn.png";
import LogoSteamStore from "../images/Buy-Imgs/logo-steam.png";
import LogoGogStore from "../images/Buy-Imgs/logo-gog.png";
import LogoHumbleStore from "../images/Buy-Imgs/logo-humble.png";
import RetailLogo from "../images/Buy-Imgs/3D_XB1.png";

import { Link } from "react-router-dom";

function Buy() {
  return (
    <div className="buy-page-content">
      <div className="container header text-center pt-5 pb-5">
        <h1>Buy Now</h1>
        <img src={HeadingBorderCenter}></img>
      </div>

      <div className="container">
        <div className="row">
          <div className="digital col-12 col-lg-4 text-center">
            <h2>Digital</h2>
            <div className="row">
              <div className="col-12">
                <h3>ON Xbox One</h3>
              </div>
              <div className="col-12">
                <img src={LogoXboxStore} alt=""></img>
              </div>
              <div className="col-12">
                <h3>ON PS4</h3>
              </div>
              <div className="col-12">
                <img src={LogoPSStore} alt=""></img>
              </div>
              <div className="col-12">
                <h3>ON PC</h3>
              </div>
              <div className="col-12">
                <img src={LogoSteamStore} alt=""></img>
              </div>
              <div className="col-12">
                <img src={LogoGogStore} alt=""></img>
              </div>
              <div className="col-12">
                <img src={LogoHumbleStore} alt=""></img>
              </div>
            </div>
          </div>
          <div className="retail col-12 col-lg-8 text-center">
            <h2>Retail</h2>

            <div className="row">
              <div className="col-12 col-md-4 text-center">
                <img src={RetailLogo}></img>
              </div>
              <div className="col-12 col-md-8">
                <div className="location">
                  <label for="location">Location</label>
                  <select name="location" id="location">
                    <option value="Australia">Australia</option>
                    <option value="Frace">Frace</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                    <option value="UK">United Kingdom</option>
                    <option value="US">Utited States</option>
                  </select>
                </div>
                <div className="retailers">
                  <div className="row">
                    <div className=" col-12">
                      <Link>
                        <img src={LogoHumbleStore}></img>
                      </Link>
                      <Link>
                        <img src={LogoHumbleStore}></img>
                      </Link>
                    </div>
                    <div className=" col-12 ml-auto">
                      <Link>
                        <img src={LogoHumbleStore}></img>
                      </Link>
                      <Link>
                        <img src={LogoHumbleStore}></img>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
