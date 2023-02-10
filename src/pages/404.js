import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <div className="container">
      <h1 className="display-1">Oops! The page you've tried to reach does not exist</h1>
      <button className="my-3 btn btn-warning">
        <Link to="/dashboard">
          Click here to go back to your Dashboard
        </Link>
      </button>
    </div>
  );
};

export default FourOhFour;