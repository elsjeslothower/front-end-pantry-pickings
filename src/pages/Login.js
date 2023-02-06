import LoginForm from "../components/forms/LoginForm";
import UFLoginForm from "../components/forms/UFLoginForm";
import { Link } from "react-router-dom";

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