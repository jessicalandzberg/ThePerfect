import React, { useRef } from 'react';
import HomeIntro from "./HomeIntro"
import HomeWhatWeDesign from "./HomeWhatWeDesign"
import HomeHowWeOperate from "./HomeHowWeOperate"
import HomeNoteFromFounders from "./HomeNoteFromFounders"
import "../CSS/home.css";



const Home = (props) => {
  const introRef = React.createRef();
  const designRef = React.createRef();
  const operateRef = React.createRef();
  const noteRef = React.createRef();

  const scrollTo = (ref) => {
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop - 80,
      behavior: 'smooth'
    })
  }

  return (
    <div className="HomeComponent">
      <HomeIntro
        myRef={introRef}
        designRef={designRef}
        operateRef={operateRef}
        noteRef={noteRef}
        scrollTo={scrollTo}/>
      <HomeWhatWeDesign
        myRef={designRef}
        operateRef={operateRef}
        scrollTo={scrollTo} />
      <HomeHowWeOperate
        myRef={operateRef}
        noteRef={noteRef}
        scrollTo={scrollTo} />
      <HomeNoteFromFounders
        myRef={noteRef}
        introRef={introRef}
        scrollTo={scrollTo} />
    </div>
  )
}

export default Home;
