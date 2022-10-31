import React from "react";
import Button from "../forms/Button";
import CheckBox from "../forms/CheckBox";
import Footer from "../forms/Footer";
import Forms from "../forms/Forms";
import TextInput from "../forms/TextInput";
import Illustration from "../Illastration";

import classes from "../../styles/Signup.module.css";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <Forms className={classes.signup}>
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Enter Confirm Password"
            icon="lock_clock"
          />

          <CheckBox type="checkbox" text="I agree to the Terms & Conditions" />

          <Button text="Submit now" />

          <Footer>
            Already have an account? <a href="login.html">Login</a> instead.
          </Footer>
        </Forms>
      </div>
    </>
  );
};

export default SignUp;
