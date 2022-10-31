import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
// import Quiz from "./pages/Quiz";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* children */}
        {/* <Home /> */}
        {/* <SignUp /> */}
        {/* <Login /> */}
        {/* <Quiz /> */}
        <Results />
      </Layout>
    </div>
  );
}

export default App;
