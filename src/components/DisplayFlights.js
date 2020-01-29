import React from 'react';
import axios from 'axios';
const FLIGHTS_URL = 'http://localhost:3000/flights.json'
class DisplayFlights extends React.Component {

    state = {
      stateFlights: [],
      matchFlights: []

    }

    fetchflights(){

  axios.get(FLIGHTS_URL)
  .then(res => this.setState({stateFlights: res.data.flights}))
  .catch(err => console.log(err))

  }

  flightMatch(){
    let allFlights = [];
    console.log('works');
    this.state.stateFlights.forEach(flight => {
      if (flight.origin === this.props.searchDep && this.props.searchArr === flight.destination && this.props.search === true) {
        allFlights.push(flight)

        console.log(flight.origin, flight.destination);
        console.log('==========');
        console.log(this.state.matchFlights);
      }
      this.setState({matchFlights: allFlights})
    }) // flights match

  }

  componentDidMount(){

    this.fetchflights();
    // console.log(this.state.flights);

    window.setInterval(() => this.flightMatch(), 3000)
  }


    render(){

      return(
        <div className="DisplayFlights">

          <div className="displayflightdetails">
            {this.state.matchFlights.length > 0
            ?
            <div>{this.state.matchFlights.map(flight =>
              <ul>
                <li key={flight.id}>Fly from {flight.origin} to {flight.destination } on {flight.date}</li>
              </ul>
            )}</div>
            :
            <p></p>
            }
          </div>
        </div>
      ) // return
    } // render

}  // DisplayFlights

export default DisplayFlights
