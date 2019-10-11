import React from 'react';
import MyfavsProductCard from "./MyfavsProductCard"


class MyFavsWithFav extends React.Component {

  render () {

    const favs = this.props.favorites.map( favorite => {
      return (
        <MyfavsProductCard
          product= {favorite}
          favorites= {this.props.favorites}
          unfavOnClick= {this.props.unfavOnClick}
          favOnClick= {this.props.favOnClick} />
      )
    })

    return (
      <div className= "MyFavsWithFavComponent">
          <div className="MyFavsWithFavContainer">

            <div className =  "MyFavsWithFavTitle">
                <p> My Favorites </p>
            </div>

            <div className="MyFavsWithFavContent">
              {favs}
            </div>

            

          </div>
      </div>
    )
  }
}



export default MyFavsWithFav;
