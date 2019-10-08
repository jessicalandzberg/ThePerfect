import React from 'react';
import {Route , Switch} from "react-router-dom"
import Login from "./Login"
import Register from "./Register"




class SignIn extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="SignInComponent">
          <Switch>
            <Route path= "/signin/register"
            render = {() => <Register
                                authFormData={this.props.authFormData}
                                authHandleChange = {this.props.authHandleChange}
                                handleRegister = {this.props.handleRegister}
                            />} />

            <Route path= "/"
            render = {() => <Login
                                authFormData={this.props.authFormData}
                                authHandleChange = {this.props.authHandleChange}
                                handleLogin = {this.props.handleLogin}
                            />} />
          </Switch>
      </div>
    )
  }
}

export default SignIn;
