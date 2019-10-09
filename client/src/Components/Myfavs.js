import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import MyfavsProductCard from "./MyfavsProductCard"


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
            <div>
              <h1> Let's find some favorites </h1>
              <p> <Link to='/Shop'> Let's browse </Link> </p>
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
