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
              <div className= "AccountSummaryRow">
                  <div className= "AccountSummaryLabel">
                    <p> Email: </p>
                  </div>
                  <div className= "AccountSummaryInfo">
                    <p> {this.props.currentUser.email} </p>
                  </div>
              </div>

              <div className= "AccountSummaryRow">
                  <div className= "AccountSummaryLabel">
                    <p> First name: </p>
                  </div>
                  <div className= "AccountSummaryInfo">
                    <p> {this.props.currentUser.firstname}  </p>
                  </div>
              </div>

              <div className= "AccountSummaryRow">
                  <div className= "AccountSummaryLabel">
                    <p> Birthday: </p>
                  </div>
                  <div className= "AccountSummaryInfo">
                    <p>{this.props.currentUser.birthday} </p>
                  </div>
              </div>

              <button
                className= "AccountButton"
                type="Submit"
                onClick= {this.props.setFormOnClick}>
                Edit </button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default AccountSummary;
