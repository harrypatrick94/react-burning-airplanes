import React from 'react';


class SearchFlight extends React.Component {

  state = {

    departFrom: '',
    arriveAt: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("Depart from: ", this.state.departFrom);
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
          <input type="submit"/>
        </form>
      </div>
    ) // return
  } // render
} // SearchFlight

export default SearchFlight
