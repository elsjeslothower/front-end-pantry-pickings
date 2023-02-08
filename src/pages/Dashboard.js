import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"
const local_host = "http://127.0.0.1:5000";

// GET individual user
const validateLoginApi = async () => {
  try {
    const res = await axios
      .get(`${local_host}/login`, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      });
    console.log(res);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};


const Dashboard = () => {
  let navigate = useNavigate();
  let loggedIn = Userfront.accessToken()
  let user = {
    name: "Elijah",
  };
  const userData = JSON.stringify(Userfront.user, null, 2);

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/login");
    };
  }, [loggedIn])

  return (
    <div className="container">
      <h1 className="mb-5">Pantry Pickings for {user.name}</h1>
      <button onClick={validateLoginApi}>Press here to try authentication</button>
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
      {/* <p>{Userfront.user}</p> */}
      <p>____________________</p>
      <p>{userData}</p>
    </div>
  );
};

export default Dashboard;