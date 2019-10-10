import React from 'react';


class EditAccount extends React.Component {

  render () {
    return (
      <div className="EditAccountComponent">
        <div className="AccountContainer">

          <div className =  "AccountTitle">
              <p> Edit my account </p>
          </div>

          <div className="AccountContent">
            <form className="EditAccountForm" onSubmit= {this.props.updateUserOnClick}>
              <label htmlFor= "email"> Email </label>
              <input
                className= "EditAccountFormInput"
                type= "text"
                name= "email"
                value= {this.props.editAccountFormData.email}
                onChange = {this.props.editHandleChange} required />

              <label htmlFor= "firstname"> First name </label>
              <input
                className= "EditAccountFormInput"
                type= "text"
                name= "firstname"
                value= {this.props.editAccountFormData.firstname}
                onChange = {this.props.editHandleChange} />

              <label htmlFor= "birthday"> Birthday (mm/dd/yyyy) </label>
              <input
                className= "EditAccountFormInput"
                type= "text"
                name= "birthday"
                value= {this.props.editAccountFormData.birthday}
                onChange = {this.props.editHandleChange} />

              <label htmlFor= "password"> Enter your current password to confirm changes </label>
              <input
                  className= "EditAccountFormInput"
                  type= "password"
                  name= "password"
                  value={this.props.editPassword}
                  onChange = {this.props.passwordHandleChange} required/>

              <button className= "AccountButton" type="Submit"> Submit </button>

            </form>
          </div>

        </div>
      </div>
    )
  }
}

export default EditAccount;
