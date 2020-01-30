import React from 'react';
import '../App.css';

class SeatMap extends React.Component {

  state = {
    bookedSeats: ['a1', 'b3']
  }

  checkForBooking (seat){
    let seatsArray = this.state.bookedSeats;

      if (seatsArray.includes(seat)) {
        console.log('taken');
      } else {
        seatsArray.push(seat)
      }
    console.log(seatsArray);
    console.log(this.props.match.params.id);
  } // checkForBooking


  render(){

    return(

      <div className="seatMap">
        <h1>SeatMap</h1>
        <div className="seatPlan">
          <div className="columnA">
            <div className="row" onClick={()=>{this.checkForBooking("a1")}}></div>
            <div className="row" onClick={()=>{this.checkForBooking("a2")}}></div>
            <div className="row" seat="a3" onClick={()=>{this.checkForBooking("a3")}}></div>
            <div className="row" seat="a4" onClick={()=>{this.checkForBooking("a4")}}></div>
          </div>
          <div className="columnB">
            <div className="row" seat="b1" onClick={()=>{this.checkForBooking("b1")}}></div>
            <div className="row" seat="b2" onClick={()=>{this.checkForBooking("b2")}}></div>
            <div className="row" seat="b3" onClick={()=>{this.checkForBooking("b3")}}></div>
            <div className="row" seat="b4" onClick={()=>{this.checkForBooking("b4")}}></div>
          </div>
          <div className="columnC">
            <div className="row" seat="c1" onClick={()=>{this.checkForBooking("c1")}}></div>
            <div className="row" seat="c2" onClick={()=>{this.checkForBooking("c2")}}></div>
            <div className="row" seat="c3" onClick={()=>{this.checkForBooking("c3")}}></div>
            <div className="row" seat="c4" onClick={()=>{this.checkForBooking("c4")}}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SeatMap
