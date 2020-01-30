import React from 'react';
import DisplayFlights from './DisplayFlights';
import '../App.css';
import {
  Link,
  HashRouter as Router
} from 'react-router-dom'

class SearchFlight extends React.Component {

  state = {
    searchText: '',
    departFrom: '',
    arriveAt: '',
  }; // state

  handleInputDep = (event) => {

    // console.log('Typing', event.target.value);
    this.setState({departFrom: event.target.value})
  }

  handleInputArr = (event) => {

    // console.log('Typing', event.target.value);
    this.setState({arriveAt: event.target.value})
  }

  handleSubmit = () => {
      const dep = this.state.departFrom
      const arr = this.state.arriveAt
      let search = [dep, arr]
      console.log(arr, dep, search);

      search = search.join('')
      console.log(search);
      this.setState({searchText: search})
      // console.log();
      const route = `displayflights/${search}`
      console.log(route);
    // console.log('new route: ', route);
    this.props.history.push(route)
  }

  render() {

    return (

      <div className="searchPage">
        <div className="searchform">
          <h1>Search Flights</h1>
            <form className="fromConents">
            <input className="formInput" type="text" placeholder="depart" onChange={ this.handleInputDep }/>
            <input className="formInput" type="text" placeholder="arrive" onChange={ this.handleInputArr }/>
            
            <span className="formSubmit"><input type="submit" onClick={ this.handleSubmit }/> </span>
          </form>
        </div>
      </div>

    ); // return

  } // render
}
export default SearchFlight
