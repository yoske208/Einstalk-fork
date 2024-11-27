import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { isKeyPressContext } from "../Provider/CookieProvider";
import { UserConntext } from "../Provider/UserProvider";



interface PrivateRouteProps {
  children: React.ReactNode;
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  
  const authContext = useContext(UserConntext);
  if (!authContext) {
    throw new Error("authContext is not provider");
  }
  const { user } = authContext;
  return user ? children :  <Navigate to="/login" />;
}; 

export default PrivateRoute;
