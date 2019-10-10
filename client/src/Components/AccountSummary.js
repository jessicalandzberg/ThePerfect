import React from 'react';
import {Link} from 'react-router-dom';


class AccountSummary extends React.Component {

  render () {
    return (
      <div className="AccountSummaryComponent">
        <div className="AccountContainer">

          <div className =  "AccountTitle">
              <p> My Profile </p>
          </div>

          <div className="AccountContent">
            <div className= "Card">
              <p> Email: </p>
              <p> {this.props.currentUser.email} </p>
              <p> First name: </p>
              <p> {this.props.currentUser.firstname}  </p>
              <p> Birthday: </p>
              <p>{this.props.currentUser.birthday} </p>
              <button
                className= "AccountButton"
                type="Submit"
                onClick= {this.props.setFormOnClick}> Edit </button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default AccountSummary;
