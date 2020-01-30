import React from 'react';
import DisplayFlights from './DisplayFlights';
import '../App.css';
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

    //const route = `/flights/search/${this.state.departFrom}/${this.state.arriveAt}`
    this.setState({search: true})

    //this.props.history.push(route)
    // this.props.saveSearch(this.state.departFrom, this.state.arriveAt)
  } // submit


  handleChangeDep = (event) => {

    this.setState({departFrom: event.target.value})
    this.setState({search: false})
  }; // change dep

  handleChangeArr = (event) => {

    this.setState({arriveAt: event.target.value})
    this.setState({search: false})
  }; //change dep

  render(){

    return (
      <div  className="searchPage">
        <div className="searchform">
          <h1>SearchFlight here</h1>
          <form className="formContents" onSubmit={this.handleSubmit}>
            <input className="formInput" type="text" placeholder="depart" onChange={this.handleChangeDep}/>
            <input className="formInput" type="text" placeholder="arrive" onChange={this.handleChangeArr}/>
            <span className="formSubmit"><input  type="submit" /></span>
          </form>
        </div>
        <br/>

        <div className="displayflights">

          <DisplayFlights searchDep={this.state.departFrom} searchArr={this.state.arriveAt} search={this.state.search}/>
        </div>
      </div>
    ) // return
  } // render
} // SearchFlight

export default SearchFlight
