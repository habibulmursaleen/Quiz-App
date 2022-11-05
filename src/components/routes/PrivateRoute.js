import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}> {(props) => <Component {...props} />} </Route>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
