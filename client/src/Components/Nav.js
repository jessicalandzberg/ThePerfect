import React from 'react';
import "../CSS/nav.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons';

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
                <p>My account</p>
                <p onClick={this.props.handleLogout}>Logout</p>
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
