import React, { Component } from "react";
import './login.css';
import Logobig from './logobig.png';
import axios from 'axios';
import FormErrors from './formError';
class Login extends Component {
  state={
    input:''
  }
  handleChange=({target:{name,value}})=> {
    this.setState({[name]: value})
  }
  setPopUpMessage= (popUpMessage) => {
        this.setState({ popUpMessage });
      };
  handleClick =()=>{
    const {history} = this.props;
    axios.post('/login',this.state)
    .then((data)=>{
    history.push('/events');
  }).catch((error)=>{
    const { data } = error.response;
    console.log('error',data);
    // context.setPopUpMessage({ message: data, title: 'Error !' });
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
