import React from 'react';
import DisplayFlights from './DisplayFlights';
import {
  Link,
  HashRouter as Router
} from 'react-router-dom'

class SearchFlight extends React.Component {

  state = {
    departFrom: '',
    arriveAt: '',
    search: false
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({search: true})
    // this.props.onSubmit(this.state.departFrom, this.state.arriveAt)
  } // submit


  handleChangeDep = (event) => {

    this.setState({departFrom: event.target.value})

  }; // change dep

  handleChangeArr = (event) => {

    this.setState({arriveAt: event.target.value})

  }; //change dep

  render(){

    return (
      <div>
        <h1>SearchFlight here</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="depart" onChange={this.handleChangeDep}/>
          <input type="text" placeholder="arrive" onChange={this.handleChangeArr}/>
          <input type="submit" />
        </form>
        <DisplayFlights searchDep={this.state.departFrom} searchArr={this.state.arriveAt} search={this.state.search}/>
      </div>
    ) // return
  } // render
} // SearchFlight

export default SearchFlight
