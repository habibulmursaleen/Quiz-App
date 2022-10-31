import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
import Quiz from "./pages/Quiz";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* children */}
        {/* <Home /> */}
        {/* <SignUp /> */}
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
