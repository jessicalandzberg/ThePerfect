import React from 'react';
import {Link, Redirect} from 'react-router-dom';


class Myfavs extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    let favRender

    if(this.props.favorites.length > 0) {
      favRender = this.props.favorites.map( favorite => {
        return (
          <div className ="A" key= {favorite.id}>
            <div className ="CardLS">
              <img alt="leather jacket" src= {favorite.picture}/>
            </div>

            <div className ="CardRS">
              <h2> {favorite.name} </h2>
              <h3> {favorite.color} </h3>
              <h4> {favorite.price} </h4>
            </div>
          </div>
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
