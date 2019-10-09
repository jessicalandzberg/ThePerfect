import React from 'react';


class HomeHowWeOperate extends React.Component {

  render () {
    return (
      <div className="HomeHowWeOperateComponent" ref={this.props.myRef}>
        <div className= "HHowContainer">
          <div className= "HHowTitle">
            <p> How we operate </p>
          </div>

          <div className = "HHowContent">
            <div className= "HHowLS">
              <h3> Left side </h3>
            </div>

            <div className= "HHowMiddle">
              <h3> Middle </h3>
            </div>

            <div className= "HHowRS">
              <h3> Right side </h3>
            </div>
          </div>

          <div className= "HHowRedirect">
                <p className = "DownArrow"
                    onClick={() => this.props.scrollTo(this.props.noteRef)}>
                    &#8595; </p>
          </div>

        </div>
      </div>
    )
  }
}

export default HomeHowWeOperate;
