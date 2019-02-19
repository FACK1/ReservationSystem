import React, { Component } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import BackCursor from "../BackCursor";
import axios from "axios";


class DetailsEvent extends Component {
  state = {
    status: this.props.history.location.event.status,
    loading: false
  };

  componentDidMount() {
    const id = this.props.history.location.event.id;
    axios
      .get(`/event/${id}`)
      .then(data => {
        this.setState({
          event_details: data.data.event,
          coffee_details: data.data.coffee,
          lunch_details: data.data.lunch,
          equipment_details: data.data.equipment,
          loading: true
        });
      })
      .catch(() => {
        const { history } = this.props;
        history.push("/error");
      });
  }

  handleSubmitForm = event => {
    event.preventDefault();
    const { history } = this.props;

    if (this.state.status === 0) {
      const id = this.props.history.location.event.id;
      axios
        .put(`/event/${id}`)
        .then(data => {
          history.push("/events");
        })
        .catch(() => {
          history.push("/error");
        });
    } else {
      history.push("/events");
    }
  };

  cancel = () => {
    const { history } = this.props;
    history.push("/events");
  };

  render() {
    if (this.state.loading === true) {
      const {
        title = "event-title",
        start_date = "",
        end_date = "",
        org_name = "",
        price = "",
        capacity = "",
        note = ""
      } = this.state.event_details || {};

      const { coffee_note = "", coffee_price = "", coffee_time = "" } = {
        ...this.state.coffee_details
      };

      const { lunch_note = "", lunch_price = "", lunch_time = "" } =
        this.state.lunch_details || {};

      const { equipment_price = "", equipment_note = "" } =
        this.state.equipment_details || {};

      let start_ddmmyyyy = new Date(start_date);

      start_ddmmyyyy =
        start_ddmmyyyy.getDate() +
        "-" +
        start_ddmmyyyy.getMonth() +
        "-" +
        start_ddmmyyyy.getFullYear();

      let end_ddmmyyyy = new Date(end_date);

      end_ddmmyyyy =
        end_ddmmyyyy.getDate() +
        "-" +
        end_ddmmyyyy.getMonth() +
        "-" +
        end_ddmmyyyy.getFullYear();
      return (
        <div className="page">
          <div>
            <NavBar {...this.props} />
          </div>
          <div className="both">
            <SideBar />
            <BackCursor />
            <div className="detailsEvent">
              <form onSubmit={this.handleSubmitForm}>
                <h2 className="h2">General</h2>
                <div className="labels_container">
                  <label className="title">Event title:</label>
                  <label className="answer">{title}</label>
                </div>
                <div className="labels_container">
                  <label className="title">Organization name:</label>
                  <label className="answer">{org_name}</label>
                </div>
                <div className="labels_container">
                  <label className="title">Hall cost:</label>
                  <label className="answer">{price}</label>
                </div>
                <div className="labels_container">
                  <label className="title">Number of persons:</label>
                  <label className="answer">{capacity}</label>
                </div>
                <div className="labels_container">
                  <label className="title">Start Date:</label>
                  <label className="answer">{start_ddmmyyyy}</label>
                </div>
                <div className="labels_container">
                  <label className="title">End Date:</label>
                  <label className="answer">{end_ddmmyyyy}</label>
                </div>
                <div className="labels_container">
                  <label className="title">note:</label>
                  <label className="answer">{note}</label>
                </div>
                <h2 className="h2">Lunch</h2>
                <div className="labels_container">
                  <label className="title">Description:</label>
                  <label className="answer">{lunch_note}</label>
                </div>
                <div className="labels_container">
                  <label className="title">time:</label>
                  <label className="answer">{lunch_time}</label>
                </div>
                <div className="labels_container">
                  <label className="title">price per person:</label>
                  <label className="answer">{lunch_price}</label>
                </div>
                <h2 className="h2">Coffee</h2>
                <div className="labels_container">
                  <label className="title">Description:</label>
                  <label className="answer">{coffee_note}</label>
                </div>
                <div className="labels_container">
                  <label className="title">time:</label>
                  <label className="answer">{coffee_time}</label>
                </div>
                <div className="labels_container">
                  <label className="title">price per person:</label>
                  <label className="answer">{coffee_price}</label>
                </div>
                <h2 className="h2">Equipment</h2>
                <div className="labels_container">
                  <label className="title">Description:</label>
                  <label className="answer">{equipment_note}</label>
                </div>
                <div className="labels_container">
                  <label className="title">price:</label>
                  <label className="answer">{equipment_price}</label>
                </div>
                {this.state.status && <input type="submit" value="OK" />}
                {!this.state.status && <input type="submit" value="Approve" />}
                {!this.state.status && (
                  <input type="button" value="Cancel" onClick={this.cancel} />
                )}
              </form>
            </div>
          </div>
        </div>
      );
    }
    return <h1>loading..</h1>;
  }
}
export default DetailsEvent;
