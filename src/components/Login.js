import React from 'react';
import '../App.css';

class Login extends React.Component {

  handleClick = () => {

    const route = `/searchflight`

    this.props.history.push(route)
  }
  render(){

    return (
      <div className="signInPage">
        <div className="divSignInForm">
          <h1>Login</h1>
          <form className="signInForm">
            <input type="text" className="formInputSign" placeholder="Username"/>
            <input type="text" className="formInputSign" placeholder="Password"/>
            <input type="submit" className="formInputSubmit" onClick={this.handleClick}/>
          </form>
        </div>
      </div>


    ) //return
  } // render
} // login

export default Login
