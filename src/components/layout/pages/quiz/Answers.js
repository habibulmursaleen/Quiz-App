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
              type="checkbox"
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              key={index}
              onChange={(event) => handleChange(event, index)}
            />
          ) : (
            <CheckBox
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              text={option.title}
              type="checkbox"
              defaultChecked={option.checked} //readonly// uncontrolled
              key={index}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
