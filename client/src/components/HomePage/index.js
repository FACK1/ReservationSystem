import React, { Component } from "react";
import Header from "../Header/header";
import NavBar from "../NavBar";
import axios from "axios";
import "./HomePage.css";
import { Link } from "react-router-dom";
class HomePage extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    axios
      .get("/service")
      .then(({ data }) => {
        const services = data.map(service => {
          return {
            id: service.id,
            image_url: service.image,
            name: service.name
          };
        });
        this.setState({
          services,
          loading: true
        });
      })
      .catch(() => {
        const { history } = this.props;
        history.push("/error");
      });
  }

  redirectToEventPage = hall => {
    const { history } = this.props;
    history.push({ pathname: "/events", hall });
  };

  render() {
    if (this.state.loading === true) {
      let halls = this.state.services;

      return (
        <div>
          <div className="home-nav-bar">
            <NavBar />
          </div>
          <div className="headerHolder">
            <Header />
            <div className="tab-container">
              <div className="buttons-container">
                <input type="button" value="Halls" className="hallsBtn" />
                <input type="button" value="Stage" className="stageBtn" />
                <input type="button" value="Yards" className="stageBtn" />
                <input type="button" value="Hostels" className="stageBtn" />
              </div>
              <div className="tab-line" />
            </div>
          </div>
          <div>
            <div className="all-halls">
              {halls.map((hall, index) => {
                const { id } = hall;

                const imageStyle = {
                  backgroundImage: "url(" + hall.image_url + ")"
                };
                return (
                  <div className="halls-row" key={index}>
                    <div className="hall-container">
                      <div className="image-container" style={imageStyle} />
                      <button className="hallBtn">
                        <Link to={`/events/${id}`} className="button-link">
                          {hall.name}
                        </Link>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>loading...</h1>;
    }
  }
}

export default HomePage;
