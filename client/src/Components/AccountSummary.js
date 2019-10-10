import React from 'react';
import {Link} from 'react-router-dom';


class AccountSummary extends React.Component {

  render () {
    return (
      <div className="AccountSummaryComponent">
        <div className="AccountSummaryContainer">
          <p className = "AccountSummaryTitle"> My Account </p>
          <p> {this.props.currentUser.email} </p>
          <p> {this.props.currentUser.birthday} </p>
          <p> {this.props.currentUser.firstname} </p>
          <button className= "AccountSummaryButton" onClick= {this.props.setFormOnClick}> Edit </button>

        </div>
      </div>
    )
  }
}

export default AccountSummary;
