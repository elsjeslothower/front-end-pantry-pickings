import LoginForm from "../components/forms/LoginForm";
import { Link } from "react-router-dom";
import Userfront from "@userfront/react";
import axios from 'axios';

const localHost = "http://127.0.0.1:5000";

Userfront.init("6bg65zyn");

const UFLoginForm = Userfront.build({
  toolId: "llbaokl"
});

const validateLoginApi = async () => {
  try {
    const res = await axios
      .get(`${localHost}/login`, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      });
    console.log(res.data)
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const Login = () => {
  return (
    <div className="container">
      <h1 className="display-1 p-4">Let's get cookin'!</h1>
      {/* <LoginForm /> */}
      <UFLoginForm />
      <p className="p-3 text-center">
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
      {/* <button onClick={validateLoginApi}>Press here to try authentication</button> */}
    </div>
  );
};

export default Login;