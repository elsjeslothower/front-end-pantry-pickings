import RegistrationForm from "../components/forms/RegistrationForm";
import SignupForm from "../components/forms/SignupForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <h1 className="display-1 p-4">Create an account</h1>
      <SignupForm />
      {/* <RegistrationForm /> */}
      <p className="p-3 text-center">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;