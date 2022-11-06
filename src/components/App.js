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
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          {/* children */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signUp"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/quiz"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route
              path="/result"
              element={
                <PrivateRoute>
                  <Results />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
