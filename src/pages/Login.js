import LoginForm from "../components/forms/LoginForm";
import UFLoginForm from "../components/forms/UFLoginForm";

const Login = () => {
  return (
    <div className="container">
      <h1 className="display-1 p-4">Login</h1>
      {/* <LoginForm /> */}
      <UFLoginForm />
    </div>
  );
};

export default Login;