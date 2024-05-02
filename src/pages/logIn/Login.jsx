import React from "react";
import SignUpHeader from "../../components/signUpHeader/SignUpHeader";
import LoginForm from "../../components/logInForm/LoginForm";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="background">
        <SignUpHeader />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
