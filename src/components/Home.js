import React from 'react';
import SearchFlight from './SearchFlight'
import DisplayFlights from './DisplayFlights'
import FlightDetails from './FlightDetails'
import '../App.css';
import {
  Route,
  HashRouter as Router
} from 'react-router-dom'


class Home extends React.Component {

  state = {
    searchDep: '',
    searchArr: ''
  }

  saveSearch = (dep, arr) => {
    this.setState({searchDep: dep})
    this.setState({searchArr: arr})
  }

  render(){

    return(
      <div className="Home">

        <h1 id="heading">Home Burning Airlines</h1>

        <div className="container">
          <Router>
            
            <Route exact path='/searchflight' component={SearchFlight}/>
            <Route exact path='/displayflights/:query' component={DisplayFlights}/>
            <Route exact path='/flightdetails/:id' component={FlightDetails}/>
          </Router>
        </div>

      </div>

    ) // return
  } // render

}

export default Home
