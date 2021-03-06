import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/global-imgs/login.png";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="app__navbar">
        <div className="navbar__list">
          <Link className="navbar__link link_home" to={"/"}>
            Home
          </Link>
          <Link className="navbar__link link_meet-emily" to={"/meet-emily"}>
            Meet Emily
          </Link>
          <Link
            className="navbar__link link_plans-pricing"
            to={"/plans-pricing"}
          >
            Plans & Pricing
          </Link>
          <Link className="navbar__link link_fox-fit" to={"/foxfit"}>
            FoxFit
          </Link>
          <Link className="navbar__link link_contact" to={"/contact"}>
            Contact
          </Link>
          <Link className="navbar__link link_login" to={"/login"}>
            <img
              className="login-icon"
              src={login}
              width="27px"
              alt="member-icon"
            />
            Log In
          </Link>
        </div>
      </div>
    );
  }
}
