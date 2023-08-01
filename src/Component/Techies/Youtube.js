// src/components/YouTubeVideo.js

import React from 'react';
import style from "./Youtube.module.css"
const YouTubeVideo = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={style.videoContainer}>
      <iframe
        title="YouTube Video Player"
        width="560"
        height="317"
        src={embedUrl}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
