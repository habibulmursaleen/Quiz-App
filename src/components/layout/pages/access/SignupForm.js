import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import Button from "../../../forms/Button";
import CheckBox from "../../../forms/CheckBox";
import Footer from "../../../forms/Footer";
import Forms from "../../../forms/Forms";
import TextInput from "../../../forms/TextInput";

import classes from "../../../../styles/Signup.module.css";

const SignupForm = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  // signup function from AuthContext (Accessign value)
  const { signup } = useAuth();

  //signup should be async function
  const handleSubmit = async (event) => {
    event.preventDefault();

    //validatino for password==confirm password
    if (password !== confirmPassword) {
      return setError("Password do not match");
    }

    try {
      setError(""); //clearing previous state's error
      setLoading(true);
      await signup(email, password, userName);
      navigate("/"); //redirecting to homepage
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to signup");
    }
  };

  return (
    <Forms className={classes.signup} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />

      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter Password"
        icon="lock"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter Confirm Password"
        icon="lock_clock"
        value={confirmPassword}
        required
        onChange={(event) => setConfirmPassword(event.target.value)}
      />

      <CheckBox
        type="checkbox"
        text="I agree to the Terms & Conditions"
        value={agree}
        required
        onChange={(event) => setAgree(event.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <Footer>
        Already have an account? <Link to="/login">Login</Link> instead.
      </Footer>
    </Forms>
  );
};

export default SignupForm;
