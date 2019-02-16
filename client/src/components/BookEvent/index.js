import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./bookevent.css";
import axios from "axios";

class BookEvent extends React.Component {
  state = {
    input: "",
    start_date: new Date(),
    end_date: new Date()
  };

  handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleChangeStartDate = date => {
    console.log("date", date);
    this.setState({ start_date: date });
  };
  handleChangeEndDate = date => {
    console.log("date", date);
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
    return (
      <div className="page">
        <div>
          <NavBar />
        </div>
        <div className="both">
          <SideBar />
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
                    value={this.state.lunchnote}
                    onChange={this.handleChange}
                  />

                  <h2 className="coffee">Coffee</h2>
                  <input
                    className="note"
                    type="text"
                    name="coffee_note"
                    placeholder="Description:"
                    value={this.state.coffeenote}
                    onChange={this.handleChange}
                  />

                  <h2 className="equipment">Equipment</h2>
                  <input
                    className="note"
                    type="text"
                    name="equipment_note"
                    placeholder="Description:"
                    value={this.state.equipmentnote}
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
                    onChange={this.handleChangeEndDate}
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
                    value={this.state.lunchprice}
                    onChange={this.handleChange}
                  />

                  <input
                    className="lunchtime"
                    type="text"
                    name="lunch_time"
                    placeholder="Time:"
                    value={this.state.lunchtime}
                    onChange={this.handleChange}
                  />

                  <input
                    className="coffeecost"
                    type="Number"
                    name="coffee_price"
                    placeholder="Cost/Person:"
                    value={this.state.coffeeprice}
                    onChange={this.handleChange}
                  />

                  <input
                    className="coffeetime"
                    type="text"
                    name="coffee_time"
                    placeholder="Time:"
                    value={this.state.coffeetime}
                    onChange={this.handleChange}
                  />
                  <input
                    className="equipmentcost"
                    type="Number"
                    name="equipment_price"
                    placeholder="Cost:"
                    value={this.state.equipmentprice}
                    onChange={this.handleChange}
                  />
                  <div className="total">
                    <h2 className="totalcost">Total Cost:</h2>
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
