import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"
const local_host = "http://127.0.0.1:5000";

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
    };
  }, [loggedIn])

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
        })
        setUser(res.data)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1 className="display-1 mb-5">Pantry Pickings for {Userfront.user["name"]}</h1>
      {/* <button onClick={validateLoginApi}>Press here to try authentication</button> */}
      <h1 className="lead fs-2">Getting Started</h1>
      <div class="accordion accordion-flush" id="accordionFlush">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Pantry
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              The pantry is where the picking comes from! Once you include all 
              the ingredients you already have in your home, you'll be able to 
              use the find-a-recipe calculator, which takes your entire pantry 
              and matches it with recipes that use as much of what you already 
              have as possible. Remember, you need to have at least one item in 
              your pantry before using the find-a-recipe calculator.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Saved Recipes
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Once you use the find-a-recipe calculator, you will have the 
              option to star your favorite results. Your saved recipes page will
              include every recipe you'd like to save.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Contacts
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
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
          class="btn btn-warning" 
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
          <div class="collapse" id="collapseWidthExample">
            <div class="card card-body">
              {userData}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;