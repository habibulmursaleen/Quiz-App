import React from "react";

import Illustration from "./Illastration";
import SignupForm from "./SignupForm";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
};

export default SignUp;
