import React from 'react';
import axios from 'axios'
import {Route , Switch} from "react-router-dom"
import Home from "./Home"
import Shop from "./Shop"
import Suggestions from "./Suggestions"
import OurStory from "./OurStory"
import Cart from "./Cart"
import SignIn from "./SignIn"
import MyFavs from "./Myfavs"
import MyAccount from "./MyAccount"


class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div className="MainComponent">
        <Switch>
          <Route path= "/Shop"
          render = {() => <Shop
                          products={this.props.products}
                          favorites = {this.props.favorites}
                          favOnClick={this.props.favOnClick}
                          unfavOnClick={this.props.unfavOnClick}
                          /> } />
          <Route path= "/Suggestions"
          render = {() => <Suggestions
                          /> } />
          <Route path= "/SignIn"
          render = {() => <SignIn
                              authFormData={this.props.authFormData}
                              authHandleChange = {this.props.authHandleChange}
                              handleLogin = {this.props.handleLogin}
                              handleRegister = {this.props.handleRegister}
                          />} />
          <Route path= "/MyFavs"
          render = {() => <MyFavs
                            favorites = {this.props.favorites}
                            currentUser={this.props.currentUser}
                            favOnClick={this.props.favOnClick}
                            unfavOnClick={this.props.unfavOnClick}
                          />} />
          <Route path= "/Cart"
          render = {() => <Cart
                            cartRedirect={this.props.cartRedirect}
                          />} />
          <Route path= "/account"
          render = {() => <MyAccount
                            currentUser={this.props.currentUser}
                            editAccountFormData={this.props.editAccountFormData}
                            updateUserOnClick={this.props.updateUserOnClick}
                            setFormOnClick= {this.props.setFormOnClick}
                            editHandleChange = {this.props.editHandleChange}
                            passwordHandleChange = {this.props.passwordHandleChange}
                            editPassword={this.props.editPassword}
                          />} />
          <Route path= "/" component= {Home} />
        </Switch>
      </div>
    )
  }
}

export default Main;
