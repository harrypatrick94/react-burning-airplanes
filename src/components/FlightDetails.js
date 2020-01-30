import React from 'react';
import SeatMap from './SeatMap'


class FlightDetails extends React.Component {



    render(){
      const flightId = this.props.match.params.id
      return(
        <div className="FlightDetails">
          <h1>FlightDetails</h1>

          <hr/>
          <SeatMap flightid={flightId}/>
          <hr/>
        </div>
      ) // return
    } // render

}  // DisplayFlights

export default FlightDetails
