import React from "react";
import UserDashPage from "../dashboard/UserDashPage";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


const Loginpage = (props) => {

  return (
    
    // props.login ? <UserDashPage />: <LoginForm />
    props.login ? <Navigate replace to={"/dashboard"}/>: <LoginForm />

  );
};

export default Loginpage;
