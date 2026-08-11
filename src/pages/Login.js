// REACT HANDLING
import React from "react";

// CLERK
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="container">
      <h1 className="display-1 p-4">Let's get cookin'!</h1>
      <SignIn routing="virtual" signUpUrl="/register" />
    </div>
  );
};

export default Login;