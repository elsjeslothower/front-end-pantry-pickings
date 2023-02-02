import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login here</h1>
      <ul id="login-info">
        <li>Username: <input type="email"></input></li>
        <li>Password: <input type="password"></input></li>
      </ul>
      <Link to="/dashboard"><button>Let's go!!</button></Link>
      <p>Don't have an account?</p>
      <Link to="/signup">Sign up here</Link>
    </div>
  );
};

export default Login;