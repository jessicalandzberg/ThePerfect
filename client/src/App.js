import React from 'react';
import Main from "./Components/Main"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import {withRouter} from "react-router-dom"
import "./CSS/general.css"
import {
  loginUser,
  registerUser,
  verifyUser
} from './services/users_api-helper'
import {
  getProducts
} from './services/products_api-helper'
import {
  getFavs,
  addFav,
  removeFav
} from './services/favs_api-helper'

class App extends React.Component {
  state = {
    products: [],
    authFormData: {
      email: '',
      password: '',
    },
    currentUser: false,
    favorites: [],
    editAccountFormData: {
      id: '',
      email: '',
      name: '',
      birthday: '',
      geography: '',
    },
  }

  /* ==============================
  =============AUTH=============
  ============================== */

  authHandleChange = (e) => {
     const {name, value} = e.target;
     this.setState(prevState => ({
       authFormData: {
         ...prevState.authFormData,
         [name]: value
       }
     }))
     console.log('this is auth handle change', this.state.authFormData)
   }


  handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    console.log('this is handle Login', this.state.currentUser);
    this.getFavs();
    this.props.history.push("/")
  }

  handleRegister= async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
    console.log('this is handle Register', this.state.currentUser)
  }

  handleLogout = () => {
      this.setState({
        currentUser: null
      })
      localStorage.removeItem("authToken");
      this.setState(prevState => ({
        favorites: []
      }))
    }


  handleVerify = async () => {
    const currentUser = await verifyUser();
    await this.setState({ currentUser })
    await console.log('this is handle verify', this.state.currentUser)
  }

  /* ==============================
  =============PRODUCTS=============
  ============================== */

  getProducts = async() => {
    const products = await getProducts();
    await this.setState({products});
    await console.log('this is getProducts', this.state.products)
  }

  /* ==============================
  =============FAVS=============
  ============================== */

  getFavs = async() => {
    const favorites = await getFavs();
    await this.setState({favorites});
    console.log("this is get favs", this.state.favorites)
  }

  addFav = async(productId) => {
    if (!this.state.currentUser) {
      this.props.history.push("/SignIn")
    } else {
    const favorite = await addFav(productId);
    await this.setState(prevState => ({
      favorites: [...prevState.favorites, favorite]
    }))
    console.log('this is favorites from add Fav', this.state.favorites)
    }
  }

  removeFav = async(productId) => {
    if (!this.state.currentUser) {
      this.props.history.push("/SignIn")
    } else {
    const favorite = await removeFav(productId);
    await this.setState(prevState => ({
      favorites: [...prevState.favorites.filter((favorite) => favorite.id !== productId)]
    }))
    console.log('this is favorites from removefav', this.state.favorites)
    }
  }

  /* ==============================
  =============UPDATE ACCOUNT=============
  ============================== */

  updateAccount = async(e) => {
    e.preventDefault();
    const {}
  }


  async componentDidMount() {
    await this.handleVerify();
    this.getProducts();

    if (this.state.currentUser) {
      this.getFavs()}
  }

  render () {
    return(
      <div className="AppComponent">
        <Nav
          currentUser={this.state.currentUser}
          handleLogout = {this.handleLogout}/>
        <Main
          authFormData={this.state.authFormData}
          authHandleChange = {this.authHandleChange}
          handleLogin = {this.handleLogin}
          handleRegister = {this.handleRegister}
          products= {this.state.products}
          favorites = {this.state.favorites}
          currentUser={this.state.currentUser}
          favOnClick={this.addFav}
          unfavOnClick={this.removeFav}/>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
