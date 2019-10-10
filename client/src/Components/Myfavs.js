import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import MyfavsProductCard from "./MyfavsProductCard"
import "../CSS/myFavs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons';


class Myfavs extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    let favRender

    if(this.props.favorites.length > 0) {
      favRender = this.props.favorites.map( favorite => {
        return (
          <MyfavsProductCard
            product= {favorite}
            favorites= {this.props.favorites}
            unfavOnClick= {this.props.unfavOnClick}
            favOnClick= {this.props.favOnClick} />
        )
      })
    }
       else if (this.props.currentUser){
         favRender = (
            <div className="MyFavsNoFavContainer">
              <p className="MyFavsNoFavHeart"> <FontAwesomeIcon className= "heartIcon" icon={solid} /> </p>
              <p className="MyFavsNoFavTitle"> Let's find some favorites </p>
              <button className= "MyFavsButton" onClick= {this.props.cartRedirect}> Check out the collection </button>
            </div>
          )
       }
         else {
           favRender= (
             <Redirect to= "/Signin" />
           )
        }

    return (
      <div className= "MyFavsComponent">
        <div className = "MyFavsContainer">
          {favRender}
        </div>
      </div>
    )
  }
}



export default Myfavs;
