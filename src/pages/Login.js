// REACT HANDLING
import React from "react";
import { Link } from "react-router-dom";

// USERFRONT
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const UFLoginForm = Userfront.build({
  toolId: "llbaokl"
});

const Login = () => {
  return (
    <div className="container">
      <h1 className="display-1 p-4">Let's get cookin'!</h1>
      {/* <LoginForm /> */}
      <UFLoginForm />
      <p className="p-3 text-center">
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;