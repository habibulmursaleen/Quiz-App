import React from "react";

import image from "../../../../assets/images/quizz.jpg.webp";
import classes from "../../../../styles/Video.module.css";

const Video = () => {
  return (
    <div>
      <div className={classes.video}>
        <img src={image} alt="Video Title" />
        <p>React Hooks - useReducer </p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
