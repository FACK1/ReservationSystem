import React, {Component} from 'react';
import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import axios from 'axios'


class BigCalendar extends Component {

  state={
     loading: false
   }
  componentDidMount(){
     axios.get('/events')
     .then((data)=>{
       const result =data.data;
       console.log('result',result);
       const events = result.map((event)=>{
         return {title: event.title,
         end: new Date(event.end_date),
       start: new Date(event.end_date),
           status: event.status}
       })
       this.setState({
         events,
         loading:true
       })
     }).catch((error)=>{
       console.log({error});
     })
   }


  click=()=>{
      const {history}= this.props;
      history.push('/bookevent');
    }

  show=()=>{
      const {history}= this.props;
      history.push('/detailsevent');
    }


    render() {
      const localizer = Calendar.momentLocalizer(moment);
      const{events,loading} = this.state;
      console.log('events',events);
      if(!loading){
        return <h1>loading </h1>
        }
      return (
        <div>
          <Calendar
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView= {'week'}
            events={events}
            style={{ height: "100vh" }}
            onSelectEvent={this.show}
            onSelectSlot={this.click}
          />
        </div>
      );
    }
}
export default BigCalendar;
