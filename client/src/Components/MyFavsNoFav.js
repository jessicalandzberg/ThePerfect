import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons';


class MyFavsNoFav extends React.Component {

  render () {

    return (
      <div className= "MyFavsNoFavComponent">
          <div className="MyFavsNoFavContainer">
            <p className="MyFavsNoFavHeart"> <FontAwesomeIcon className= "heartIcon" icon={solid} /> </p>
            <p className="MyFavsNoFavTitle"> Let's find some favorites </p>
            <button className= "MyFavsButton" onClick= {this.props.shopRedirect}> Check out the collection </button>
          </div>
      </div>
    )
  }
}



export default MyFavsNoFav;
