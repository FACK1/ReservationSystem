import React, { Component } from "react";
import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import "./calendar.css";
import moment from "moment";
import axios from "axios";

class BigCalendar extends Component {
  state = {
    loading: false
  };
  componentDidMount() {
    axios
      .get("/events")
      .then(data => {
        const result = data.data;
        const events = result.map(event => {
          return {
            id: event.id,
            title: event.title,
            start: new Date(event.start_date),
            end: new Date(event.end_date),
            status: event.status,
            price: event.price,
            capacity: event.capacity,
            note: event.note,
            orgName: event.org_name,
            userId: event.eventId
          };
        });
        this.setState({
          events,
          loading: true
        });
      })
      .catch(error => {
        const { history } = this.props;
        history.push("/error");
      });
  }

  click = () => {
    const { history } = this.props;
    history.push("/bookevent");
  };

  show = () => {
    const { history } = this.props;
    history.push("/detailsevent");
  };

  render() {
    const localizer = Calendar.momentLocalizer(moment);
    const { events, loading } = this.state;
    if (!loading) {
      return <h1>loading </h1>;
    }
    return (
      <div className="page">
        <div>
          <NavBar />
        </div>
        <div className="both">
          <SideBar />
          <div className="calendar-container">
            <Calendar
              selectable
              localizer={localizer}
              defaultDate={new Date()}
              defaultView={"week"}
              events={events}
              style={{ height: "100vh" }}
              onSelectEvent={this.show}
              onSelectSlot={this.click}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default BigCalendar;
