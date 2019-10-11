import React from 'react';
import Main from "./Components/Main"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import {withRouter} from "react-router-dom"
import "./CSS/general.css"
import {
  loginUser,
  registerUser,
  verifyUser,
  editUser
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
      email: '',
      firstname: '',
      birthday: '',
    },
    editPassword: '',
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
    console.log('this is handle Register', this.state.currentUser);
    this.props.history.push("/")
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
    console.log('this is handle verify', this.state.currentUser)
  }

  /* ==============================
  =============PRODUCTS=============
  ============================== */

  getProducts = async() => {
    const products = await getProducts();
    await this.setState({products});
    console.log('this is getProducts', this.state.products)
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

  updateUser = async(e) => {
    e.preventDefault()
    const currentEmail = this.state.currentUser.email;
    const currentPassword = this.state.editPassword;
    try {
        const checkLogin = await loginUser({ email: currentEmail, password: currentPassword })
        const data  = this.state.editAccountFormData;
        const { id } = this.state.currentUser;
        const { email } = await editUser(id, data);
        const currentUser = await loginUser({ email: email, password: currentPassword });
        this.setState({ currentUser });
        this.getFavs();
        this.props.history.push("/account")
    } catch (e) {
        alert("Changes not made")
      }
  }

  setEditAccountFormData = async(e) => {
    e.preventDefault();
    const {id, password_digest, created_at, updated_at, ...editAccountFormData} = this.state.currentUser;
    this.setState({ editAccountFormData });
    this.props.history.push("/account/edit")
  }

  editHandleChange = (e) => {
     const {name, value} = e.target;
     this.setState(prevState => ({
       editAccountFormData: {
         ...prevState.editAccountFormData,
         [name]: value
       }
     }))
     console.log('this is edit handle change', this.state.editAccountFormData)
   }

   passwordHandleChange = (e) => {
      const {name, value} = e.target;
      this.setState(prevState => ({
        editPassword: value,
        }
      ))
      console.log('this is password handle change', this.state.editPassword)
    }

  /* ==============================
  =============CART REDIRECT=============
  ============================== */

  shopRedirect = (e) => {
    this.props.history.push("/Shop")
  }


  async componentDidMount() {
    await this.handleVerify();
    await this.getProducts();

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
          unfavOnClick={this.removeFav}
          editAccountFormData={this.state.editAccountFormData}
          updateUserOnClick={this.updateUser}
          setFormOnClick= {this.setEditAccountFormData}
          editHandleChange = {this.editHandleChange}
          passwordHandleChange = {this.passwordHandleChange}
          editPassword={this.state.editPassword}
          shopRedirect={this.shopRedirect}
          />
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
