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
                          favOnClick={this.props.favOnClick}
                          favorites = {this.props.favorites}
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
                          />} />
          <Route path= "/Cart"
          render = {() => <Cart
                          />} />
          <Route path= "/" component= {Home} />
        </Switch>
      </div>
    )
  }
}

export default Main;
