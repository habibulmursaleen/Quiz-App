import React from "react";

import logo from "../../assets/images/quizz.jpg.webp";
import classes from "../../styles/Nav.module.css";

const Brand = () => {
  return (
    <>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Welcome to React Quiz App</h3>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Brand;
