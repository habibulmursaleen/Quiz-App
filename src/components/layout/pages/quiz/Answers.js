import React from "react";
import CheckBox from "../../../forms/CheckBox";

import classes from "../../../../styles/Answers.module.css";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <CheckBox type="checkbox" className={classes.answer} text="Test Answer" />
      <CheckBox type="checkbox" className={classes.answer} text="Test Answer" />
      <CheckBox type="checkbox" className={classes.answer} text="Test Answer" />
      <CheckBox type="checkbox" className={classes.answer} text="Test Answer" />
      <CheckBox type="checkbox" className={classes.answer} text="Test Answer" />
      <CheckBox type="checkbox" className={classes.answer} text="Test Answer" />
      <CheckBox type="checkbox" className={classes.answer} text="Test Answer" />
      <CheckBox type="checkbox" className={classes.answer} text="Test Answer" />
    </div>
  );
};

export default Answers;
