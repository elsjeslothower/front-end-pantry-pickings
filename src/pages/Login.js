import LoginForm from "../components/forms/LoginForm";
import { Link } from "react-router-dom";
import Userfront from "@userfront/react";
import RecipeCalcForm from "../components/forms/RecipeCalcForm";

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
      <p><Link to="/dashboard">To dashboard</Link></p>
    </div>
  );
};

export default Login;