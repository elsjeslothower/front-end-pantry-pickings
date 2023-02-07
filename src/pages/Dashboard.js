import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import Userfront from "@userfront/react";

const Dashboard = () => {
  let navigate = useNavigate();
  let loggedIn = Userfront.accessToken()

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/login");
    };
  }, [loggedIn])
  
  let user = {
    name: "Elijah",
  }

  return (
    <div className="container">
      <h1 className="mb-5">Pantry Pickings for {user.name}</h1>
      <section htmlFor="infoCards">
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-title">About Pantry Pickings</h5>
            <h6 className="card-subtitle mb-2 text-muted">How it works</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;