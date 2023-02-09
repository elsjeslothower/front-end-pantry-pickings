// ROUTER
import { Link } from "react-router-dom";

// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import PantryList from "../components/PantryList";
import AddPantryItemForm from "../components/forms/AddPantryItem";
import mockPantry from "../mockData/mockPantry";

// AXIOS CALLS
import axios from "axios";
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/";
const localHost = "http://127.0.0.1:5000";

const getPantryApi = (userId) => {
  return axios
    .get(`${kBaseUrl}/user/${userId}/pantry`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err)
    });
};

const addNewPantryItemApi = (newItemData) => {
  return axios
    .post(`${localHost}/pantry`, newItemData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err)
    });
};

// APP RENDERING
const FullPantry = () => {
  // set useState hooks here
  const [pantryData, setPantryData] = useState(mockPantry);
  const userId = Userfront.user["userId"]
  // add handling functions here

  const getPantry = (userId) => {
    getPantryApi(userId).then((pantryItems) => {
      setPantryData(pantryItems);
    });
  };

  // useEffect(() => {
  //   // data fetching code
  //   pantryData ? getPantry(userId) : pantryData = "add information here"
  // }, [pantryData])

  const handlePantrySubmit = (title, category, expDate, userId) => {
    const newItemData = {
      pantry_item_title:title,
      category:category,
      exp_date:expDate,
      user_id:userId,
    };
    addNewPantryItemApi(newItemData)
      .then((newItem) => {
        console.log(newItem);
        setPantryData([...pantryData, newItem]);
      })
      .catch((err) => console.log(err))
  };


  return (
    <div className="container">
      <h1 className="display-1">{Userfront.user["name"]}'s Pantry</h1>
      <div className="row">
        <div className="col">
          <p>Idea: Make forms collapsable?</p>
          <AddPantryItemForm
            handlePantrySubmit={handlePantrySubmit}
            userId={userId} 
          />
        </div>
      </div>
      <div className="mt-3 row">
        <PantryList
          pantryData={pantryData}
          handlePantrySubmit={handlePantrySubmit} 
        />
      </div>
    </div>
  );
};

export default FullPantry;