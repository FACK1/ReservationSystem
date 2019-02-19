import React from "react";
import { Link } from 'react-router-dom'
import "./NavBar.css";
import logo from "./logo.png";
import axios from 'axios';


function handleSubmit(props){

  const { history } = props;
  axios
    .get("/logout")
    .then(() => {
      history.push("/");
    })
    .catch(error => {
      history.push("/error");
    });
};

const NavBar = (props) => (
  <div className="nav-outer">
    <div className="nav-bar1">
      <Link to="/events"><img className="logo" src={logo} alt="logo" /></Link>
      <button className="logout-btn" onClick={()=>handleSubmit(props)}> log out </button>
    </div>
  </div>
);
export default NavBar;
