import { Link } from "react-router-dom";
import "./welcome.css"

const burger = require('../images/clipart47340.png');

const Welcome = () => {
  return (
    <div className="container" id="welcome">
      <h1>Welcome to Pantry Pickings!</h1>
      <img id="burger" src={burger} alt="burger"></img>
      <div className="p-2"><Link to="/login"><button>Click here to login</button></Link></div>
      <p>
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
    </div>
  );
};

export default Welcome;

// use this later:
      // <h1>Welcome to Pantry Pickings!!</h1>
      // <h2>Sign in here:</h2>
      // <input>Username:</input>
      // <input>Password:</input>
      // <p>Don't have an account? Sign up</p>
      // <span>here</span>