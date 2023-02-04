// ROUTER
import { Link } from "react-router-dom";

// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import PantryItem from "../components/PantryItem";
import PantryList from "../components/PantryList";

// AXIOS CALLS
import axios from "axios";

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/";

const getPantryApi = (user_id) => {
  return axios
    .get(`${kBaseUrl}/user/${user_id}/pantry`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err)
    });
};

// APP RENDERING
const FullPantry = () => {
  // set useState hooks here
  const [pantryData, setPantryData] = useState([]);
  
  // add handling functions here

  // user_id here??
  const getPantry = () => {
    getPantryApi().then((pantryItems) => {
      setPantryData(pantryItems);
    });
  };

  // useEffect(() => {
  //   // data fetching code
  //   // user_id here??
  //   getPantry();
  // }), [pantryData]

  return (
    <div>
      <h1>Welcome to your pantry!</h1>
      <p>Include PantryItem in here:</p>
      <PantryItem />
      <p>PantryList (PantryItems mapped out) here:</p>
      {/* <PantryList /> */}
      <Link to="/dashboard"><button>Click here to see nav bar</button></Link>
    </div>
  );
};

export default FullPantry;