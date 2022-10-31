import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
// import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* children */}
        {/* <Home /> */}
        <SignUp />
      </Layout>
    </div>
  );
}

export default App;
