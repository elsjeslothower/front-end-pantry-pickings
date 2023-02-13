// REACT HANDLING
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css"

// USERFRONT
import Userfront from "@userfront/react";

// AXIOS CALLS
import axios from "axios";
const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com"
const localHost = "http://127.0.0.1:5000";

Userfront.init("6bg65zyn");

// API CALLS
const validateLoginApi = async () => {
  try {
    const res = await axios
      .get(`${kBaseUrl}login`, 
      {          
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      })
      return (res.data)
  } catch (err) {
    console.error(err);
  }
};

// APP RENDERING
const Dashboard = () => {
  let navigate = useNavigate();
  let loggedIn = Userfront.accessToken()
  const [user, setUser] = useState(Userfront.user["userId"])
  console.log(user)
  console.log(setUser)
  const userData = JSON.stringify(Userfront.user, null, 2);

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/login");
    } else {
      validateLoginApi();
    };
  }, [loggedIn])

  return (
    <div className="container">
      <h1 className="display-1 mb-5">Pantry Pickings for {Userfront.user["name"]}</h1>
      {/* <button onClick={validateLoginApi}>Press here to try authentication</button> */}
      <h1 className="lead fs-2">Getting Started</h1>
      <div className="accordion accordion-flush" id="accordionFlush">
        <div className="accordion-item" style={{ color: "#531209", background: "bisque" }}>
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed bg-closed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Pantry
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              The pantry is where the picking comes from! Once you include all 
              the ingredients you already have in your home, you'll be able to 
              use the find-a-recipe calculator, which takes your entire pantry 
              and matches it with recipes that use as much of what you already 
              have as possible. Remember, you need to have at least one item in 
              your pantry before using the find-a-recipe calculator.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ color: "#531209", background: "bisque" }}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed bg-closed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Saved Recipes
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Once you use the find-a-recipe calculator, you will have the 
              option to star your favorite results. Your saved recipes page will
              include every recipe you'd like to save.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={{ color: "#531209", background: "bisque" }}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed bg-closed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Contacts
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Contacts are an easy way to keep track of dietary preferences!
              Your contact page can include all of your friends and their diets. 
              This includes both preferences like gluten-free or dairy-free as
              well as intolerances or allergies, such as celiac or peanut-free.
              Start by adding a friend's information to the form and use that to
              guide your recipe choices.
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-3">
        <button 
          className="btn btn-warning" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapseWidthExample" 
          aria-expanded="false" 
          aria-controls="collapseWidthExample"
        >
          userData
        </button>
        </p>
        <div>
          <div className="collapse" id="collapseWidthExample">
            <div className="card card-body">
              {userData}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;