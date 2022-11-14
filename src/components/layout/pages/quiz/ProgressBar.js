import React from "react";
import Button from "../../../forms/Button";

import classes from "../../../../styles/ProgressBar.module.css";

const ProgressBar = ({ nextQuestion, prevQuestion, submit, progress }) => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prevQuestion}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress} Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : nextQuestion}
      >
        <span>{progress === 100 ? "Submit" : "Next Question"} </span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
