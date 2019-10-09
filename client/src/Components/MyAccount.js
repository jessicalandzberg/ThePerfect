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
                          /> } />
          <Route path= "/" component= {AccountSummary} />
        </Switch>
      </div>
    )
  }
}

export default MyAccount;
