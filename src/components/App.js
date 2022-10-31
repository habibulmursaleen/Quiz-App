import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* children */}
        {/* <Home /> */}
        {/* <SignUp /> */}
        <Login />
      </Layout>
    </div>
  );
}

export default App;
