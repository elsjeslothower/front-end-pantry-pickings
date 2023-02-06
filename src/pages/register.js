import RegistrationForm from "../components/forms/RegistrationForm";
import SignupForm from "../components/forms/SignupForm";
import Userfront from "@userfront/react";

const Register = () => {
  return (
    <div>
      <h1 className="display-1 p-4">Create an account</h1>
      <SignupForm />
      {/* <RegistrationForm /> */}
    </div>
  );
};

export default Register;