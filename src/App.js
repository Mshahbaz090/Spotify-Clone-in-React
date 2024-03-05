import { useState } from "react";
import Player from "./Component/Player";
import { useEffect } from "react";


function App() {


  const [songs] = useState([
    {
      title: "Titaliyaan",
      artist: "Hardy Sandhu",
      img_src: "./Images/Titliaan.jpg",
      src: "./Songs/T.mp3"


    },
    {
      title: "Batein",
      artist: "Hardy Sandhu",
      img_src: "./Images/Titliaan.jpg",
      src: "./Songs/B.mp3"


    },
    {
      title: "Care ni karda",
      artist: "Yo Yo Honey Singh",
      img_src: "./Images/care ni .jpg",
      src: "./Songs/Care ni.mp3"


    },
    {
      title: "Care ni karda",
      artist: "Yo Yo Honey Singh",
      img_src: "./Images/care ni .jpg",
      src: "./Songs/E.mp3"


    },
    {
      title: "Care ni karda",
      artist: "Yo Yo Honey Singh",
      img_src: "./Images/care ni .jpg",
      src: "./Songs/DJ.mp3"


    },
    {
      title: "Care ni karda",
      artist: "Yo Yo Honey Singh",
      img_src: "./Images/care ni .jpg",
      src: "./Songs/M.mp3"


    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {

    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      }
      else {
        return currentSongIndex + 1
      }

    })



  }, [currentSongIndex, songs.length])




  return (
    <div className="App">

      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />



    </div>
  );
}

export default App;
