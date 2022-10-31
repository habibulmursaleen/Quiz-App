import React from "react";

import SignUpImage from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={SignUpImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
