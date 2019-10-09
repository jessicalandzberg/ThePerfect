import React from 'react';
import {Link} from 'react-router-dom';
import "../CSS/login.css";



class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {email, password} = this.props.authFormData
    return (
      <div className="LoginComponent">
        <div className="LoginContainer">
          <p className = "LoginTitle"> Welcome back! </p>
          <form onSubmit= {this.props.handleLogin}>
            <input className="FormInput" name="email" value= {email} onChange={this.props.authHandleChange} type="text" placeholder="Username" required />
            <input className="FormInput" name="password" value= {password} onChange={this.props.authHandleChange}type="password" placeholder="Password" required />
            <button className= "LoginButton"> Login </button>
          </form>
          <p className= "LoginRedirect"> Don't have an account? <Link to='/signin/register'> Create one </Link> </p>
        </div>
      </div>
    )
  }
}

export default Login;
