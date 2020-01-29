import React from 'react';
import SearchFlight from './SearchFlight'
import DisplayFlights from './DisplayFlights'
import FlightDetails from './FlightDetails'
import {
  Route,
  HashRouter as Router
} from 'react-router-dom'


class Home extends React.Component {

  render(){

    return(
      <div className="Home">

        <h1>Home Buring Airlines</h1>
        <hr/>
        <Router>
          <Route exact path='/searchflight' component={SearchFlight}/>
          <Route exact path='/displayflights' component={DisplayFlights}/>
          <Route exact path='/flightdetails' component={FlightDetails}/>
        </Router>
        <hr/>
      </div>

    ) // return
  } // render

}

export default Home
