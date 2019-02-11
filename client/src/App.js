import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Calendar from "./components/Calendar";
import HomePage from "./components/HomePage";
import Hall from "./components/Hall";
import BookEvent from "./components/BookEvent";
import DetailsEvent from "./components/DetailsEvent";
import Header from './components/Header/header';
import Login from './components/Login/login';
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/" component={Calendar} />
          <Route exact path="/" component={Login} />
          <Route exact path="/hall" component={Hall} />
          <Route exact path="/bookevent" component={BookEvent}/>
          <Route exact path="/detailsevent" component={DetailsEvent}/>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
