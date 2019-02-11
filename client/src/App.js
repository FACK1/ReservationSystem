import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Hall from "./components/Hall";
import Header from './components/Header/header';
import Login from './components/Login/login';
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Login} />
          <Route exact path="/hall" component={Hall} />
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
