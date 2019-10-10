import React from 'react';
import {Route , Switch} from "react-router-dom";
import EditAccount from "./EditAccount"
import AccountSummary from "./AccountSummary"


class MyAccount extends React.Component {

  render () {
    return (
      <div className="AccountComponent">
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
      </div>
    )
  }
}

export default MyAccount;
