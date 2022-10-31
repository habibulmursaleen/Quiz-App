import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/quizz.jpg.webp";
import classes from "../../styles/Nav.module.css";

const Brand = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Welcome to React Quiz App</h3>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Brand;
