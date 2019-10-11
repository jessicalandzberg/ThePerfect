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
              <div className ="MyFavsCard" key= {this.props.product.id}>
                <div className ="MyFavsCardTop">
                  <img alt="leather jacket" src= {this.props.product.picture}/>
                </div>

                <div className ="MyFavsCardBottom">
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
                  <h2> {this.props.product.name} </h2>
                  <p> {this.props.product.color} </p>
                  <p> {this.props.product.price} </p>

                </div>
              </div>
    )
  }
}

export default MyfavsProductCard;
