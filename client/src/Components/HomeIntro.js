import React from 'react';
import ReactDOM from 'react-dom';
import Typing from 'react-typing-animation';


class HomeIntro extends React.Component {

  render () {
    return (
      <div className="HomeIntroComponent" ref={this.props.myRef}>

        <div className= "HIntroContainer">

          <div className= "HIntroContent">

                <div className= "Hleft">
                  <h1> <Typing speed= {30} hideCursor= {true}> Women wear </Typing> </h1>
                  <h1> <Typing speed= {30} hideCursor= {true}> <Typing.Delay ms={1000} /> 30% of their closet </Typing> </h1>
                  <h1> <Typing speed= {30} hideCursor= {true}> <Typing.Delay ms={2500} /> 80% of the time </Typing> </h1>
                </div>

                <div className = "Hright">
                  <h1> <Typing speed= {60} hideCursor= {true}> <Typing.Delay ms={4000} /> We focus on that 30% </Typing> </h1>
                </div>

          </div>

          <div className= "HIntroRedirect">
                <div className = "HButtons">
                  <button className="HomeButton"
                    onClick={() => this.props.scrollTo(this.props.designRef)}> WHAT WE DESIGN </button>
                  <button className="HomeButton"
                    onClick={() => this.props.scrollTo(this.props.operateRef)}> HOW WE OPERATE </button>
                  <button className="HomeButton"
                    onClick={() => this.props.scrollTo(this.props.noteRef)}> NOTE FROM US </button>
                </div>
                <p className = "DownArrow"
                    onClick={() => this.props.scrollTo(this.props.designRef)}> &#8595; </p>
          </div>

      </div>
    </div>
    )
  }
}

export default HomeIntro;
