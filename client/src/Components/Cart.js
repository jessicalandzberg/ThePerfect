import React from 'react';
import "../CSS/Cart.css"


class Cart extends React.Component {

  render () {
    return (
      <div className="CartComponent">
        <div className="CartContainer">
          <p className="CartTitle"> Shopping can be easy and enjoyable! </p>
          <button className= "CartButton" onClick= {this.props.cartRedirect}> Check out the collection </button>
        </div>
      </div>
    )
  }
}

export default Cart;
