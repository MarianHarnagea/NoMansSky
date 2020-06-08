import React from "react";
import HeaderLogo from "../../images/header-logo.png";
import "../../styles/navigation.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/" onClick={props.click}>
          <img className="header-logo" alt="Header-Logo" src={HeaderLogo}></img>
        </Link>
      </div>

      <div className="links-container-lg">
        <ul>
          <li className="link-nav">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/PatchNotes">Latest Patch Notes</Link>
          </li>
          <li className="link-nav">
            <Link to="/Buy">Buy</Link>
          </li>
          <li className="link-nav">
            <Link to="/About">About</Link>
          </li>
          <li className="link-nav">
            <a href="https://hellogames.zendesk.com/hc/en-us">Help Center</a>
          </li>
          <li className="link-nav">
            <Link to="/ReleaseLog">Release Log</Link>
          </li>
        </ul>
      </div>

      <div>
        <button onClick={props.sideNavClickHandeler} className="menu-btn">
          Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
