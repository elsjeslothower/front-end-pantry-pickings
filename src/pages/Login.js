import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import "./login.css"

// Should I put all this info in a component instead?

const Login = () => {
  return (
    <div>
      <h1 class="display-1">Login</h1>
      <LoginForm />
    </div>
    // <div>
    //   <h1>Login here</h1>
    //   <ul id="login-info">
    //     <li>Username: <input type="email"></input></li>
    //     <li>Password: <input type="password"></input></li>
    //   </ul>
    //   <div className="p-2">
    //     <Link to="/dashboard"><button>Let's go!!</button></Link>
    //   </div>
    //   <p>
    //     Don't have an account? <Link to="/signup">Sign up here</Link>
    //   </p>
    // </div>
  );
};

export default Login;