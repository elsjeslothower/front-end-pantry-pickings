// REACT HANDLING
import { Link } from "react-router-dom";

// USERFRONT
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const SignupForm = Userfront.build({
  toolId: "nkdnrab"
});

const Register = () => {
  return (
    <div className="container">
      <h1 className="display-1 p-4">Create an account</h1>
      <SignupForm />
      {/* <RegistrationForm /> */}
      <p className="p-3 text-center">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
      {/* <button onClick={addUserApi}>Press here to try adding to database</button> */}
    </div>
  );
};

export default Register;