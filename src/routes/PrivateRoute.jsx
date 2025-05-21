import React, { use } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user,loading } = use(AuthContext);
  const location=useLocation()
  console.log(location);
  if(loading){
    return <Loading></Loading>
  }
  else if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
  } 
  else {
    return children;
  }
};

export default PrivateRoute;
