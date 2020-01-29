import React from 'react';
import axios from 'axios';
const FLIGHTS_URL = 'http://localhost:3000/flights.json'
class DisplayFlights extends React.Component {

    state = {
      stateFlights: []
    }

    fetchflights(){

  axios.get(FLIGHTS_URL)
  .then(res => this.setState({stateFlights: res.data.flights}))
  .catch(err => console.log(err))

  }

  flightMatch(){
    console.log('works');
    this.state.stateFlights.forEach(flight => {
      console.log(flight.origin, flight.destination);
    })

  }

  componentDidMount(){

    this.fetchflights();
    // console.log(this.state.flights);

    // window.setInterval(() => this.flightMatch(), 5000)
  }


    render(){

      return(
        <div className="DisplayFlights">

          <div className="displayflightdetails">
            {this.state.stateFlights.length > 0
            ?
            <div>{this.state.stateFlights.map(flight =>
              <ul>
                <li key={flight.id}>Fly from {flight.origin} to {flight.destination }</li>
              </ul>
            )}</div>
            :
            <h2>No flight</h2>
            }
          </div>
        </div>
      ) // return
    } // render

}  // DisplayFlights

export default DisplayFlights
