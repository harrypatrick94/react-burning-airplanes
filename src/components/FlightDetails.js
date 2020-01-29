import React from 'react';
import SeatMap from './SeatMap'

class FlightDetails extends React.Component {

    render(){

      return(
        <div className="FlightDetails">
          <h1>FlightDetails</h1>

          <hr/>
          <SeatMap />
          <hr/>
        </div>
      ) // return
    } // render

}  // DisplayFlights

export default FlightDetails
