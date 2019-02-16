import React from "react";
import "./NavBar.css";
import logo from "./logo.png";

const NavBar = () => (
  <div className="nav-outer">
    <div className="nav-bar1">
      <img className="logo" src={logo} alt="logo" />
      <button className="logout-btn">log out</button>
    </div>
  </div>
);
export default NavBar;
