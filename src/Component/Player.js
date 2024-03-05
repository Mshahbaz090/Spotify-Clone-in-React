import React, { useEffect, useRef, useState } from 'react'
import Details from './Details'
import Controls from './Controls'

function Player(props) {

    const audioE1 = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            audioE1.current.play()
        }
    })
    const skipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.song.length - 1) {
                    temp = 0;
                }
                return temp;
            });

        }
        else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });




        }
    }




    return (
        <div className='player'>
            <h4>
                Palying Now
            </h4>
            <Details

                song={props.songs[props.currentSongIndex]}

            />
            <Controls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}




            />
            <audio
                className='player_audio'
                src={props.songs[props.currentSongIndex].src}
                ref={audioE1}
                controls >

            </audio>
            <p>
                Next Up: {" "}
                <span>
                    {props.songs[props.nextSongIndex].title} by { " " }
                    {props.songs[props.nextSongIndex].artist}
                </span>
            </p>

        </div>
    )
}

export default Player
