import React from 'react';
import HomeIntro from "./HomeIntro"
import HomeWhatWeDesign from "./HomeWhatWeDesign"
import HomeHowWeOperate from "./HomeHowWeOperate"
import HomeNoteFromFounders from "./HomeNoteFromFounders"
import "../CSS/home.css";



class Home extends React.Component {

  render () {
    return (
      <div className="HomeComponent">
          <HomeIntro />
          <HomeWhatWeDesign />
          <HomeHowWeOperate />
          <HomeNoteFromFounders />
      </div>
    )
  }
}

export default Home;
