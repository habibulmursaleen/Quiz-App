import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import Button from "../../../forms/Button";
import Footer from "../../../forms/Footer";
import Forms from "../../../forms/Forms";
import TextInput from "../../../forms/TextInput";

import classes from "../../../../styles/Signup.module.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  // signup function from AuthContext (Accessign value)
  const { login } = useAuth();

  //signup should be async function
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError(""); //clearing previous state's error
      setLoading(true);
      await login(email, password);
      navigate("/"); //redirecting to homepage
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to sign in");
    }
  };

  return (
    <Forms className={classes.signup} onSubmit={handleSubmit}>
      <TextInput
        type="text"
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
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <Footer>
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </Footer>
    </Forms>
  );
};

export default LoginForm;
