import React, { Component } from "react";
import "./Hall.css";
import Calendar from "../Calendar";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

class Hall extends Component {
  render() {
    return (
      <div className="page">
        <div>
          <NavBar />
        </div>
        <div className="both">
          <SideBar />
          <div className="calendar-container">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default Hall;
