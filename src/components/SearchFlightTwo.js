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

      let search = []
      console.log(arr, dep, search);
      // search = search.push(dep)
      // search = search.push(arr)
      // search = search.join('')
      console.log(search);
      const route = `/procedures/search/${this.state.searchText}`
    // console.log('new route: ', route);
    this.props.history.push(route)
  }

  render() {

    return (

      <div>
      <br/>
        <input type="text" onChange={ this.handleInputDep }/>
        <input type="text" onChange={ this.handleInput }/>
        <button onClick={ this.handleSubmit }>Search Procedures</button>
      <br/>
      <hr/>
      <br/>
        <p>I am a good dentist. Let me look in you mouth.</p>

      </div>

    ); // return

  } // render
}
export default SearchFlight
