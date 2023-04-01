import React from "react";
import UserDashPage from "../dashboard/UserDashPage";
import LoginForm from "./LoginForm";


const Loginpage = (props) => {
  return (
    props.login ? <UserDashPage/> : <LoginForm/>
  );
};

export default Loginpage;
