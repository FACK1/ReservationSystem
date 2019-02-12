import React from "react";
import "./NavBar.css";
import logo from "./logo.png";

const NavBar = () => (
  <div className="nav-bar1">
    <img src={logo} alt="logo" width="6%" height="40px" />
    <a href="url" className="link">
      logout
    </a>
  </div>
);
export default NavBar;
