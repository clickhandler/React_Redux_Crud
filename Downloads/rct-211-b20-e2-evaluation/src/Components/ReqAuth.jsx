//Create the HOC for protected Routes

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const ReqAuth = ({children}) => {
    const Auth = useSelector((store) => store.Authreducer.isAuth);
    const location = useLocation((state) => location.pathname);
  
    if (!Auth) {
      return <Navigate to="/login" state={location} replace />;
    } else {
      return children;
    }
};

export default ReqAuth;
