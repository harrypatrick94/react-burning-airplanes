import React from 'react';
import '../App.css';

class SeatMap extends React.Component {

  render(){

    return(

      <div className="seatMap">
        <h1>SeatMap</h1>
        <div className="seatPlan">
          <div className="columnA">
            <div className="row" id="a1"></div>
            <div className="row" id="a3"></div>
            <div className="row" id="a3"></div>
            <div className="row" id="a4"></div>
          </div>
          <div className="columnB">
            <div className="row" id="b1"></div>
            <div className="row" id="b2"></div>
            <div className="row" id="b3"></div>
            <div className="row" id="b4"></div>
          </div>
          <div className="columnC">
            <div className="row" id="c1"></div>
            <div className="row" id="c2"></div>
            <div className="row" id="c3"></div>
            <div className="row" id="c4"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SeatMap
