import React from 'react'
import YouTubeVideo from './Youtube'
import style from "./Techies.module.css"

const Techies = () => {
    const videoId = 'w0eeQ0Tgk7E';
    const videoId1= "t8OC41i0ggY";
  return (
    <div className={style.main}>
      <h1>Techies 💘 TopHire</h1>
      <h4>A better love story than twilight. Check the video below to find out why.</h4>
     <div className={style.youtube}> <YouTubeVideo videoId={videoId} />
    
     </div>
    </div>
  )
}

export default Techies
