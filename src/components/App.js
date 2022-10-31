import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* children */}
        <Home />
      </Layout>
    </div>
  );
}

export default App;
