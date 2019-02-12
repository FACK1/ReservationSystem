import React, { Component } from "react";
import './login.css';
import Logobig from './logobig.png';
import axios from 'axios';

class Login extends Component {
  state={
    input:''
  }
  handleChange=({target:{name,value}})=> {
    this.setState({[name]: value})
  }

  handleClick =()=>{
    const {history} = this.props;
    axios.post('/login',this.state)
    .then((data)=>{
    history.push('/events');
    })

  }
  handleSubmitForm=(event)=>{
    event.preventDefault();
  }


  render() {
return(
  <div className="login">
    <img  className="photo"src={Logobig} alt="logo" width="30%" height="370px"/>

    <form  onSubmit ={this.handleSubmitForm}>
    <div className="form">
    <input
    type="text"
    class="fadeIn second"
    name="username"
    value={this.state.username}
    placeholder="username"
    onChange={this.handleChange}
    />
    <input
    type="text"
    class="fadeIn third"
    name="password"
    placeholder="password"
    value={this.state.password}
    onChange={this.handleChange}
    />
    </div>
    <button
    className="btn1"
    onClick={this.handleClick}>
    Log in
    </button>
      </form>
  </div>
)
}
}
export default Login;
