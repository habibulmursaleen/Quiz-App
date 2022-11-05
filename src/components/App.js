import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import "../styles/App.css";
import Layout from "./layout/Layout";
import Login from "./layout/pages/access/Login";
import SignUp from "./layout/pages/access/SignUp";
import Home from "./layout/pages/home/Home";
import Quiz from "./layout/pages/quiz/Quiz";
import Results from "./layout/pages/results/Results";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          {/* children */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Results />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
