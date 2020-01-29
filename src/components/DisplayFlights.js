import React from 'react';
import axios from 'axios';
import {
  Link,
  HashRouter as Router
} from 'react-router-dom'
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
    // console.log('works');
    this.state.stateFlights.forEach(flight => {
      if (flight.origin === this.props.searchDep && this.props.searchArr === flight.destination && this.props.search === true) {
        allFlights.push(flight)

        // console.log(flight.origin, flight.destination);
        // console.log(this.state.matchFlights);
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
            <div key="showFlights">{this.state.matchFlights.map(flight =>
              <ul key="displayUL">
              <Router>
                <Link to='/flightdetails/:id'>
                  <li key={flight.id}>Fly from {flight.origin} to {flight.destination } on {flight.date}</li>
                </Link>
              </Router>
              </ul>
            )}</div>
            :
            <ul key="displayNoFlights">
              <li>Test 1</li>
              <li>Test 1</li>
              <li>Test 1</li>

            </ul>
            }
          </div>
        </div>
      ) // return
    } // render

}  // DisplayFlights

export default DisplayFlights
