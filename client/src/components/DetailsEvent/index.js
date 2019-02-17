import React from 'react'
import Header from '../Header/header';
class DetailsEvent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
      <Header />
      <h1>Event Details </h1>
      </div>
    )
  }
}
export default DetailsEvent
