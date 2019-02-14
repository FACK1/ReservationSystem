import React from 'react';
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './bookevent.css';

class BookEvent extends React.Component {
  render() {
    return (
      <div className="page">
        <div>
          <NavBar />
        </div>
        <div className="both">
          <SideBar />
      <div className="BookEvent">
        <form>
          <div className="container">
            <div className="column1">
              <h2 className="h2">General</h2>
                <input className="input"
                  type="text"
                  name="title"
                  placeholder="Event Name:"
                />
                <label className="label">Start Date:</label>
                <DatePicker
                  className="bookdates"
                  selected={new Date()}
                />

                <input className="note"
                  type="text"
                  name="note"
                  placeholder="Note:"

                />
                <input className="input"
                  type="text"
                  name="capacity"
                  placeholder="#Persons:"

                />
                <h2 className="h2">Lunch</h2>
                <input className="note"
                  type="text"
                  name="lunchnote"
                  placeholder="Description:"

                />

                <h2 className="coffee">Coffee</h2>
                <input className="note"
                  type="text"
                  name="coffeenote"
                  placeholder="Description:"

                />

                <h2 className="equipment">Equipment</h2>
                <input className="note"
                  type="text"
                  name="equipmentnote"
                  placeholder="Description:"

                />
            </div>
            <div className="column2">
            <input className="input"
              type="text"
              name="orgName"
              placeholder="Organization Name:"

            />
            <label className="label">End Date:</label>
            <DatePicker
              className="bookdates"
              selected={new Date()}
            />

            <input className="input"
              type="Number"
              name="price"
              placeholder="Cost:"

            />
            <input className="lunchcost"
              type="Number"
              name="lunchprice"
              placeholder="Cost/Person:"

            />

            <input className="lunchtime"
              type="text"
              name="time"
              placeholder="Time:"
            />

            <input className="coffeecost"
              type="Number"
              name="coffeeprice"
              placeholder="Cost/Person:"

            />


            <input className="coffeetime"
              type="text"
              name="time"
              placeholder="Time:"
            />
            <input className="equipmentcost"
              type="Number"
              name="equipmentprice"
              placeholder="Cost:"

            />
            <div className="total">
            <h2 className="totalcost">Total Cost:</h2>
            <input className="submitBtn"
            type="submit"
            >
            </input>
            </div>
            </div>

          </div>

        </form>
        </div>
        </div>
      </div>
      )
  }
}
export default BookEvent
