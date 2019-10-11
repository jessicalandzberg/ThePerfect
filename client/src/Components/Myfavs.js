import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import MyFavsNoFav from "./MyFavsNoFav"
import MyFavsWithFav from "./MyFavsWithFav"
import "../CSS/myFavs.css"



class Myfavs extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    let favRender

    if(this.props.favorites.length > 0) {
      favRender =
          <MyFavsWithFav
            favorites= {this.props.favorites}
            unfavOnClick= {this.props.unfavOnClick}
            favOnClick= {this.props.favOnClick}
            shopRedirect={this.props.shopRedirect} />

    }
       else if (this.props.currentUser){
         favRender = (
            <MyFavsNoFav
              shopRedirect={this.props.shopRedirect}
              />
          )
       }
         else {
           favRender= (
             <Redirect to= "/Signin" />
           )
        }

    window.scrollTo({
      top: 0,
      left: 0,
    })

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
