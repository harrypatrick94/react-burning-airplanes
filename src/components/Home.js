import React from 'react';
import SearchFlight from './SearchFlight'
import {
  Route,
  HashRouter as Router
} from 'react-router-dom'


class Home extends React.Component {

  render(){

    return(
      <div ClassName="Home">

        <h1>Home Buring Airlines</h1>
        <hr/>
        <Router>

          <Route exact path='/searchflight' component={SearchFlight}/>
        </Router>
        <hr/>
      </div>

    ) // return
  } // render

}

export default Home
