import React from 'react';
import Typing from 'react-typing-animation';


class HomeIntro extends React.Component {

  render () {
    return (
      <div className="HomeIntroComponent">

        <div className= "HIntroContainer">

          <div className= "HIntroContent">

                <div className= "Hleft">
                  <h1> <Typing speed= {30} hideCursor= {true}> Women wear </Typing> </h1>
                  <h1> <Typing speed= {30} hideCursor= {true}> <Typing.Delay ms={1000} /> 30% of their closet </Typing> </h1>
                  <h1> <Typing speed= {30} hideCursor= {true}> <Typing.Delay ms={2500} /> 80% of the time </Typing> </h1>
                </div>

                <div className = "Hright">
                  <h1> <Typing speed= {60} hideCursor= {true}> <Typing.Delay ms={5000} /> We focus on that 30% </Typing> </h1>
                </div>

          </div>

          <div className= "HIntroRedirect">
                <div className = "HButtons">
                  <button className="HomeButton"> WHAT WE DESIGN </button>
                  <button className="HomeButton"> HOW WE OPERATE </button>
                  <button className="HomeButton"> NOTE FROM US </button>
                </div>
                <p className = "DownArrow"> &#8595; </p>
          </div>

      </div>
    </div>
    )
  }
}

export default HomeIntro;
