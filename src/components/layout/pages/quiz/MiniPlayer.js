import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";

import classes from "../../../../styles/MiniPlayer.module.css";

const MiniPlayer = ({ title, videoId }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoURL = `https://www.youtube.com/watch?v=${videoId}`;

  const toggleMiniplayer = () => {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  };

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniplayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniplayer}
      >
        close
      </span>
      {/* videoplayer package */}
      <ReactPlayer
        className={classes.player}
        url={videoURL}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
