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

  bookEvent = event => {
    const { history } = this.props;
    history.push({ pathname: "/bookevent", event });
  };

  detailsEvent = event => {
    const { history } = this.props;
    history.push({ pathname: "/detailsevent", event });
  };

  pendingEventStyle = (event) => {
    if (event.status === 0) {
      const style = { backgroundColor: "#D4AC0D" };
      return { style: style };
    }
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
          <NavBar {...this.props} />
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
              onSelectEvent={this.detailsEvent}
              onSelectSlot={this.bookEvent}
              eventPropGetter={this.pendingEventStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default BigCalendar;
