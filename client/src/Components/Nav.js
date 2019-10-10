import React from 'react';
import "../CSS/nav.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

render (){
    return(
      <nav className="NavComponent">
        <div className = "NavContainer">

          <div className = "NavLS">
            <p> <Link to='/Shop'>Shop</Link> </p>
            <p> <Link to='/Suggestions'>Share with us! </Link> </p>
          </div>

          <p className= "Logo"> <Link to='/'> The Perfect  </Link> </p>

          <div className = "NavRS">

            {
            this.props.currentUser
              ?
              <>
                <div className="dropdown">
                      <p className= "dropbtn">  <FontAwesomeIcon className= "UserIcon" icon={faUser} /> </p>
                      <div className="dropdown-content">
                        <p className="NavWelcome"> Welcome {this.props.currentUser.firstname} </p>
                        <p className= "dropdownHover"> <Link to='/account'>My account</Link> </p>
                        <p className= "dropdownHover"> <Link to='/MyFavs'>My favorites</Link> </p>
                        <p className= "dropdownHover" onClick={this.props.handleLogout}> <Link to='/'> Logout </Link> </p>
                      </div>
                </div>
              </>
              :
              <p> <Link to='/SignIn'>Sign in </Link> </p>
            }
            <p> <Link to='/MyFavs'> <FontAwesomeIcon className= "heartIcon" icon={regular} /> </Link> </p>
            <p> <Link to='/Cart'> <FontAwesomeIcon className= "cartIcon" icon={faShoppingCart} /> </Link> </p>
          </div>

        </div>

      </nav>
    )
}
}

export default Nav;
