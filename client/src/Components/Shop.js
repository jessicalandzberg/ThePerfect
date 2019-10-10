import React from 'react';
import "../CSS/shop.css";
import ShopProductCard from "./ShopProductCard"



class Shop extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const products = this.props.products.map( product => {
      return (
        <ShopProductCard
          key= {product.id}
          product= {product}
          favorites= {this.props.favorites}
          unfavOnClick= {this.props.unfavOnClick}
          favOnClick= {this.props.favOnClick} />
      )
    })
    return (
      <div className="ShopComponent">
          <div className="ShopContainer">

            <div className = "ShopTitle">
              <h1> The collection </h1>
            </div>

            <div className = "ShopContent">
            {products}
            </div>

          </div>
      </div>
    )
  }
}

export default Shop;
