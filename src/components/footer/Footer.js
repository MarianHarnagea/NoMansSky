import React, { Component } from "react";
import Twiter from "./media/Twiter";
import Facebook from "./media/Facebook";
import More from "./media/More";
import "../footer/footer.scss";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer p-4">
          <div className="container">
            <div className="footer-links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/PrivacyPolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/Agreements">End User Licence Agreements</Link>
                </li>
              </ul>
            </div>

            <div className="footer-media">
              <Twiter />
              <Facebook />
              <More />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
