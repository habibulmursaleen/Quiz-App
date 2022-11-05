import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../forms/Button";
import Footer from "../../../forms/Footer";
import Forms from "../../../forms/Forms";
import TextInput from "../../../forms/TextInput";
import Illustration from "./Illastration";

import classes from "../../../../styles/Signup.module.css";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Forms className={classes.signup}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <Button>
            <span>Submit Now</span>
          </Button>

          <Footer>
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </Footer>
        </Forms>
      </div>
    </>
  );
};

export default Login;
