import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import BackCursor from "../BackCursor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./bookevent.css";
import axios from "axios";


class BookEvent extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    input: "",
    start_date: this.props.history.location.event.start,
    end_date: this.props.history.location.event.end
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleChangeStartDate = date => {
    this.setState({ start_date: date });
  };
  handleChangeEndDate = date => {
    this.setState({ end_date: date });
  };
  handleSubmitForm = event => {
    event.preventDefault();
    const { history } = this.props;
    axios
      .post("/event", this.state)
      .then(data => {
        history.push("/events");
      })
      .catch(error => console.log(error));
  };

  render() {
      console.log('state',this.props);
    return (
      <div className="page">
        <div>
          <NavBar {...this.props} />
        </div>
        <div className="both">
          <SideBar />
          <BackCursor />
          <div className="BookEvent">
            <form onSubmit={this.handleSubmitForm}>
              <div className="container">
                <div className="column1">
                  <h2 className="h2">General</h2>
                  <input
                    className="input"
                    type="text"
                    name="title"
                    placeholder="Event Name:"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                  />
                  <label className="label">Start Date:</label>
                  <DatePicker
                    className="bookdates"
                    selected={this.state.start_date}
                    onChange={this.handleChangeStartDate}
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                    name="start_date"
                  />

                  <input
                    className="note"
                    type="text"
                    name="note"
                    placeholder="Note:"
                    value={this.state.note}
                    onChange={this.handleChange}
                  />
                  <input
                    className="input"
                    type="text"
                    name="capacity"
                    placeholder="#Persons:"
                    value={this.state.capacity}
                    onChange={this.handleChange}
                    required
                  />
                  <h2 className="h2">Lunch</h2>
                  <input
                    className="note"
                    type="text"
                    name="lunch_note"
                    placeholder="Description:"
                    value={this.state.lunch_note}
                    onChange={this.handleChange}
                  />

                  <h2 className="coffee">Coffee</h2>
                  <input
                    className="note"
                    type="text"
                    name="coffee_note"
                    placeholder="Description:"
                    value={this.state.coffee_note}
                    onChange={this.handleChange}
                  />

                  <h2 className="equipment">Equipment</h2>
                  <input
                    className="note"
                    type="text"
                    name="equipment_note"
                    placeholder="Description:"
                    value={this.state.equipment_note}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="column2">
                  <input
                    className="input"
                    type="text"
                    name="org_name"
                    placeholder="Organization Name"
                    value={this.state.orgName}
                    onChange={this.handleChange}
                    required
                  />
                  <label className="label">End Date:</label>
                  <DatePicker
                    className="bookdates"
                    selected={this.state.end_date}
                    showTimeSelect
                     timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                    onChange={this.handleChangeEndDate}
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                  />

                  <input
                    className="input"
                    type="Number"
                    name="price"
                    placeholder="Cost:"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                  <input
                    className="lunchcost"
                    type="Number"
                    name="lunch_price"
                    placeholder="Cost/Person:"
                    value={this.state.lunch_price}
                    onChange={this.handleChange}
                  />

                  <input
                    className="lunchtime"
                    type="text"
                    name="lunch_time"
                    placeholder="Time:"
                    value={this.state.lunch_time}
                    onChange={this.handleChange}
                  />

                  <input
                    className="coffeecost"
                    type="Number"
                    name="coffee_price"
                    placeholder="Cost/Person:"
                    value={this.state.coffee_price}
                    onChange={this.handleChange}
                  />

                  <input
                    className="coffeetime"
                    type="text"
                    name="coffee_time"
                    placeholder="Time:"
                    value={this.state.coffee_time}
                    onChange={this.handleChange}
                  />
                  <input
                    className="equipmentcost"
                    type="Number"
                    name="equipment_price"
                    placeholder="Cost:"
                    value={this.state.equipment_price}
                    onChange={this.handleChange}
                  />
                  <div className="total">
                    <input className="submitBtn" type="submit" value="Submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default BookEvent;
