// REACT HANDLING
// CLERK
import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="container">
      <h1 className="display-1 p-4">Create an account</h1>
      <SignUp routing="virtual" signInUrl="/login" />
    </div>
  );
};

export default Register;