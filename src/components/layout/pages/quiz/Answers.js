import React from "react";
import CheckBox from "../../../forms/CheckBox";

import classes from "../../../../styles/Answers.module.css";

const Answers = ({ options = [], handleChange }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <CheckBox
          type="checkbox"
          className={classes.answer}
          text={option.title}
          value={index}
          checked={options.checked}
          key={index}
          onChange={(event) => handleChange(event, index)}
        />
      ))}
    </div>
  );
};

export default Answers;
