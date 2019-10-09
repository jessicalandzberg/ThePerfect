import React from 'react';


class HomeNoteFromFounders extends React.Component {

  render () {
    return (
      <div className="HomeNoteFromFoundersComponent" ref={this.props.myRef}>

        <div className= "HNoteFromFoundersContainer">

          <div className= "HNoteTitle">
            <p> Note from founders  </p>
          </div>

          <div className = "HNoteContent">
            <p> Note from founders CONTENT</p>
          </div>

          <div className= "HNoteRedirect">
                <p className = "DownArrow"
                    onClick={() => this.props.scrollTo(this.props.introRef)}>
                    &#8593; </p>
          </div>

        </div>

      </div>
    )
  }
}

export default HomeNoteFromFounders;
