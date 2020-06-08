import React from "react";
import "../../styles/navigation.scss";
import { Link } from "react-router-dom";

const MobileNav = (props) => {
  return (
    <div className="links-container-mobile">
      <ul>
        <li className="link-nav">
          <Link to="/" onClick={props.click}>
            Home
          </Link>
        </li>
        <li className="link">
          <Link to="/PatchNotes" onClick={props.click}>
            Latest Patch Notes
          </Link>
        </li>
        <li className="link-nav">
          <Link to="/Buy" onClick={props.click}>
            Buy
          </Link>
        </li>
        <li className="link-nav">
          <Link to="/About" onClick={props.click}>
            About
          </Link>
        </li>
        <li className="link-nav">
          <a href="https://hellogames.zendesk.com/hc/en-us">Help Center</a>
        </li>
        <li className="link-nav">
          <Link to="/ReleaseLog" onClick={props.click}>
            Release Log
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
