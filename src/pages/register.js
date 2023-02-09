import RegistrationForm from "../components/forms/RegistrationForm";
import { Link } from "react-router-dom";
import Userfront from "@userfront/react";
import axios from "axios";

const localHost = "http://127.0.0.1:5000";

Userfront.init("6bg65zyn");

const SignupForm = Userfront.build({
  toolId: "nkdnrab"
});

const addUserApi = async () => {
  try {
    const res = await axios
      .get(`${localHost}/user`, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

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