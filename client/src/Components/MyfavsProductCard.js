import React from 'react';
// import "../CSS/shop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons';

class MyfavsProductCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
              <div className ="ShopProductCard" key= {this.props.product.id}>
                <div className ="ProductCardLS">
                  <img alt="leather jacket" src= {this.props.product.picture}/>
                </div>

                <div className ="ProductCardRS">
                  <h2> {this.props.product.name} </h2>
                  <h3> {this.props.product.color} </h3>
                  <h4> {this.props.product.price} </h4>
                  { this.props.favorites.find((fav) => fav.id === this.props.product.id) ?
                    <FontAwesomeIcon className= "heartIcon"
                                      icon={solid}
                                      onClick = {() => {this.props.unfavOnClick(this.props.product.id)}}
                    /> :
                    <FontAwesomeIcon className= "heartIcon"
                                      icon={regular}
                                      onClick = {() => {this.props.favOnClick(this.props.product.id)}}
                    />
                  }
                </div>
              </div>
    )
  }
}

export default MyfavsProductCard;
