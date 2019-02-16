import React, { Component } from "react";
import "./login.css";
import Logobig from "./logobig.png";
import axios from "axios";

class Login extends Component {
  state = {
    input: ""
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { history } = this.props;
    axios.post("/login", this.state).then(data => {
      history.push("/events");
    });
  };
  handleSubmitForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="outer-login">
        <div className="login">
          <img
            className="photo"
            src={Logobig}
            alt="logo"
            width="30%"
            height="370px"
          />

          <form className="form" onSubmit={this.handleSubmitForm}>
            <input
              className="login-input"
              type="text"
              name="username"
              value={this.state.username}
              placeholder="username"
              onChange={this.handleChange}
            />
            <input
              className="login-input"
              type="text"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="btn1" onClick={this.handleClick}>
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
