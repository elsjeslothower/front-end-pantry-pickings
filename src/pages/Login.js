import { useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import UFLoginForm from "../components/forms/UFLoginForm";

const Login = () => {
  // Get USER axios call
  
  const navigate = useNavigate();

  const validateUser = (credentials) => {
    // Add user auth here
    // axios call for DB comparison
    return true;
  };
  
  const handleLogin = (event) => {
    event.preventDefault();
    const credentials = [
      event.target[0].value, 
      event.target[1].value,
      // add checkbox here later
    ];
    
    console.log("LET ME INNNNNN!!")
    console.log(credentials);
    console.log("...please?");
    
    return validateUser(credentials);
  };

  return (
    <div className="container">
      <h1 className="display-1 p-4">Login</h1>
      {/* <LoginForm /> */}
      <UFLoginForm />
    </div>
  );
};

export default Login;