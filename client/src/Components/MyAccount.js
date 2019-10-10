import React from 'react';
import {Route , Switch, Redirect} from "react-router-dom";
import EditAccount from "./EditAccount"
import AccountSummary from "./AccountSummary";
import "../CSS/account.css";


class MyAccount extends React.Component {

  render () {
    return (
      <div className="AccountComponent">
          {
          this.props.currentUser
            ?
            <>
              <Switch>
                <Route path= "/account/edit"
                render = {() => <EditAccount
                                    editAccountFormData={this.props.editAccountFormData}
                                    updateUserOnClick={this.props.updateUserOnClick}
                                    editHandleChange = {this.props.editHandleChange}
                                    passwordHandleChange = {this.props.passwordHandleChange}
                                    editPassword={this.props.editPassword}
                                /> } />
                <Route path= "/account"
                render = {() => <AccountSummary
                                    currentUser={this.props.currentUser}
                                    setFormOnClick= {this.props.setFormOnClick}
                                /> } />
              </Switch>
            </>
            :
            <>
              <Redirect to= "/Signin" />
            </>
          }
      </div>
    )
  }
}

export default MyAccount;
