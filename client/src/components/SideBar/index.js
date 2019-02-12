import React from "react";
import "./sidebar.css";
import hall1 from "./hall1.png";

const SideBar = () => (
  <div className="side-bar">
    <div className="card">
      <img src={hall1} alt="hall" />
      <h3 className="card-typing">Co-working Space 1</h3>
      <p className="card-typing">15 persons</p>
      <p className="card-typing">300 &#8362;</p>
      <p className="card-typing">data show</p>
      <div className="agenda-colors">
        <div className="color-typing">
          <div className="blue" />
          <p className="agenda-prop">approved</p>
        </div>
        <div className="color-typing">
          <div className="light-blue" />
          <p className="agenda-prop">pending</p>
        </div>
      </div>
    </div>
    <div className="line" />
  </div>
);
export default SideBar;
