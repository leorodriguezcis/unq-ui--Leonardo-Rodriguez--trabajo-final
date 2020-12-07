import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, component }) => {
  const isAuthenticated = !!localStorage.getItem("user");

  if (!isAuthenticated) return <Redirect to={"/login"} />;

  return <Route path={path} component={component} />;
};

export default PrivateRoute;