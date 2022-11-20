import React, { Fragment } from "react";
import CheckBox from "../../../forms/CheckBox";

import classes from "../../../../styles/Answers.module.css";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <CheckBox
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              key={index}
              onChange={(event) => handleChange(event, index)}
            />
          ) : (
            <CheckBox
              key={index}
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              } `}
              text={option.title}
              defaultChecked={option.checked} //readonly// uncontrolled
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
