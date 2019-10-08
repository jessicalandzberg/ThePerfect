import React from 'react';
import "../CSS/login.css";

class Register extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {email, password} = this.props.authFormData
    return (
      <div className="RegisterComponent">
        <h1> Lets make an account </h1>
        <div className="RegisterContainer">
        <form onSubmit= {this.props.handleRegister}>
          <input className="FormInput" name="email" value= {email} onChange={this.props.authHandleChange} type="text" placeholder="Username" required />
          <input className="FormInput" name="password" value= {password} onChange={this.props.authHandleChange}type="password" placeholder="Password" required />
          <button className= "LoginButton"> Create an account </button>
        </form>
        </div>
      </div>
    )
  }
}

export default Register;
