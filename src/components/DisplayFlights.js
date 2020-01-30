import React from 'react';
import axios from 'axios';
import '../App.css';
import FlightDetails from './FlightDetails'
import {
  Link,
  HashRouter as Router
} from 'react-router-dom'
const FLIGHTS_URL = 'http://localhost:3000/flights.json'
class DisplayFlights extends React.Component {

    state = {
      stateFlights: [],
      matchFlights: [],
      showSeatPlan: false

    }

    fetchflights(){

      axios.get(FLIGHTS_URL)
      .then(res => {
        // console.log(res.data);
        this.setState({stateFlights: res.data
        })
        })
      .catch(err => console.log(err))

  }


  flightMatch(){
    let allFlights = [];
    // console.log('works');
    const searchedFlights = this.props.match.params.query.toLowerCase();
    console.log(searchedFlights);
    this.state.stateFlights.forEach(flight => {

      let flightsJoin = [flight.origin, flight.destination]
      flightsJoin = flightsJoin.join('').toLowerCase()
      if (searchedFlights === flightsJoin) {
        allFlights.push(flight)
      }
       this.setState({matchFlights: allFlights})

    }) // flights match

  }

  buttonSubmit = (id) => {

    // console.log();
    const route = `/flightdetails/${id}`

  // console.log('new route: ', route);

    this.props.history.push(route)
  }


  componentDidMount(){

    this.fetchflights()



    window.setInterval(() => this.flightMatch(), 1000)
  }


    render(){

      return(
        <div className="displayFlights">

          <div className="displayflightdetails">
            {this.state.matchFlights.length > 0
            ?
            <div key="showFlights" className="displayDiv">
            {this.state.matchFlights.map(flight =>
                <ul key="displayUL" className="displayUL">
                    <li key={flight.id} className="displayFlightList">Fly from {flight.origin} to {flight.destination } on {flight.date} <button onClick={()=>{this.buttonSubmit(flight.id)}} className="buttonSelect">Select Flight</button></li>
                </ul>
            )}</div>
            :
            <ul key="displayNoFlights">
              <li>Loading...</li>
            </ul>
            }
          </div>
        </div>
      ) // return
    } // render

}  // DisplayFlights

export default DisplayFlights
