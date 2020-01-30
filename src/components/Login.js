import React from 'react';
import '../App.css';
import axios from 'axios';

class Login extends React.Component {

  state = {
    password: "",

  }

  handlePassword = (event) => {

    this.setState({password: event.target.value})
  }

  handleClick = () => {

    const route = `/searchflight`
    if (this.state.password === 'chicken') {
      this.props.history.push(route)
    }

  }
  render(){

    return (
      <div className="signInPage">
        <div className="divSignInForm">
          <h1>Login</h1>
          <form className="signInForm">
            <input type="text" className="formInputSign" placeholder="Username"/>
            <input type="text" className="formInputSign" placeholder="Password" onChange={this.handlePassword}/>
            <input type="submit" className="formInputSubmit" onClick={this.handleClick}/>
          </form>
        </div>
      </div>


    ) //return
  } // render
} // login

export default Login
