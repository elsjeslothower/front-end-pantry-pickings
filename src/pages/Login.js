// REACT HANDLING
import React from "react";

// CLERK
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="container">
      <h1 className="display-1 p-4">Let's get cookin'!</h1>
      <div className="d-flex justify-content-center">
        <SignIn routing="virtual" signUpUrl="/register" />
      </div>
    </div>
  );
};

export default Login;