// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

//USERFRONT
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

// AXIOS CALLS
import axios from "axios";
const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/";
const localHost = "http://127.0.0.1:5000";

// COMPONENTS
import PantryList from "../components/PantryList";
import AddPantryItemForm from "../components/forms/AddPantryItem";
import mockPantry from "../mockData/mockPantry";

// API CALLS
const getPantryApi = async () => {
  try {
    const res = await axios
      .get(`${localHost}/user/pantry`, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      })
      console.log(`success!! data here:"${res.data}"`)
      console.log(res.data[0])
      return (res.data)
  } catch (err) {
    console.log(err);
  }
};

const addNewPantryItemApi = async (req) => {
  console.log(req);
  try {
    const res = await axios
      .post(`${localHost}/pantry`, req,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `u ${Userfront.tokens.accessToken}`,
          }
        }, 
      );
    console.log(`success!! data here:"${res.data}"`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const deletePantryItemApi = async (pantry_item_id) => {
  console.log(pantry_item_id)
  try {
    const res = await axios
    .delete(`${localHost}/pantry/${pantry_item_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      },
    );
    console.log(`success!! data here:"${res.data}"`);
    return res.data;
  } catch (err) {
    console.log(err)
  }
}

// APP RENDERING
const FullPantry = () => {
  // set useState hooks here
  const [pantryData, setPantryData] = useState([]);
  const userId = Userfront.user["userId"]
  // add handling functions here

  const getPantry = (userId) => {
    getPantryApi(userId).then((pantryItems) => {
      setPantryData(pantryItems);
    });
  };

  useEffect(() => {
    // data fetching code
    getPantry(userId)
  }, [pantryData]);

  const deletePantryItem = (pantry_item_id) => {
    deletePantryItemApi(pantry_item_id);
    setPantryData((pantryData) =>
      pantryData.filter((pantryItem) => {
        return pantryItem.pantry_item_id !== pantry_item_id;
      })
    );
  };

  const handlePantryItemSubmit = (itemTitle, itemCategory, itemExpDate) => {
    const newItemData = {
      pantry_item_title:itemTitle,
      category:itemCategory,
      exp_date:itemExpDate,
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
      <h2 className="display-5">
        {pantryData === [] 
          ? "Use the form to add to your pantry"
          : ""
        }
      </h2>
      <div className="row">
        <div className="col">
          <button onClick={getPantryApi}>Press here to try getting pantry</button>
          <p>Idea: Make forms collapsable?</p>
          <AddPantryItemForm
            handlePantryItemSubmit={handlePantryItemSubmit}
          />
        </div>
      </div>
      <div className="mt-3 row">
        <PantryList
          pantryData={pantryData}
          onDeletePantryItem={deletePantryItem}
          handlePantryItemSubmit={handlePantryItemSubmit} 
        />
      </div>
    </div>
  );
};

export default FullPantry;