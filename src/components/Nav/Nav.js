import React from "react";
import Account from "./Account";
import Brand from "./Brand";

import classes from "../../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Brand />
      <Account />
    </nav>
  );
};

export default Nav;
