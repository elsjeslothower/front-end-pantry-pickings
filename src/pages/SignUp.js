import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1>Create an account here</h1>
      <ul id="login-info">
        {/* <li>Username: <input type="email">...@gmail.com</input></li> */}
        <li>First name: <input type="text" required></input></li>
        <li>Last name: <input type="text" required></input></li>
        <li>Username: <input type="email" required placeholder="must be an email"></input></li>
        <li>Password: <input type="text" required placeholder="at least 8 characters"></input></li>
        <li>Confirm password: <input type="text" placeholder="must match ^^"></input></li>
      </ul>
      <Link to="/dashboard"><button>Let's go!!</button></Link>
      <p>Already have an account?</p>
      <Link to="/login">Login here</Link>
    </div>
  );
};

export default SignUp;