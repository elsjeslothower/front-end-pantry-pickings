import { Link } from "react-router-dom";
import "./welcome.css"

const burger = require('../images/clipart47340.png');

const Welcome = () => {
  return (
    <div className="container" id="welcome">
      <h1>Welcome to Pantry Pickings!</h1>
      <img id="burger" className="m-3" src={burger} alt="burger"></img>
      <div className="p-2"><Link to="/login"><button type="submit" className="btn btn-warning">Click here to login</button></Link></div>
      <p>
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
    </div>
  );
};

export default Welcome;