import React from 'react';
import {Link} from 'react-router-dom';


class AccountSummary extends React.Component {

  render () {
    return (
      <div className="AccountSummaryComponent">
        <div className="AccountSummaryContainer">

          <p className = "AccountSummaryTitle"> My Account </p>
          <button className= "AccountSummaryButton"> <Link to='/account/edit'> Edit </Link> </button>

        </div>
      </div>
    )
  }
}

export default AccountSummary;
