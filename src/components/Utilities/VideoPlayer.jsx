"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youTubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "250",
  };
  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="float-right bg-color-secondary text-color-accent hover:bg-color-accent hover:text-color-secondary px-3 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youTubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  };
  return isOpen ? (
    <Player />
  ) : (
    <button
      onClick={handleVideoPlayer}
      className="fixed bottom-5 right-5 w-32 bg-color-secondary p-2 text-md hover:bg-color-accent hover:text-color-secondary text-color-accent rounded-md"
    >
      Tonton Trailer
    </button>
  );
};
export default VideoPlayer;
