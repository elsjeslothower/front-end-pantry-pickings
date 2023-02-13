// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//USERFRONT
import Userfront from "@userfront/react";

// COMPONENTS
import PantryList from "../components/PantryList";
import AddPantryItemForm from "../components/forms/AddPantryItem";
import mockPantry from "../mockData/mockPantry";

// AXIOS CALLS
import axios from "axios";
const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com";
const localHost = "http://127.0.0.1:5000";

Userfront.init("6bg65zyn");

// API CALLS
const getPantryApi = async () => {
  try {
    const res = await axios
    .get(`${kBaseUrl}/user/pantry`, 
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `u ${Userfront.tokens.accessToken}`,
      },
    })
    console.log(`success getPantry!! data here:"${res.data}"`);
    console.log(res.data[0]);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const addNewPantryItemApi = async (req) => {
  console.log(req);
  try {
    const res = await axios.post(`${kBaseUrl}/pantry`, req, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `u ${Userfront.tokens.accessToken}`,
      },
    });
    console.log(`success!! data here:"${res.data}"`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const deletePantryItemApi = async (pantry_item_id) => {
  console.log(pantry_item_id);
  try {
    const res = await axios.delete(`${kBaseUrl}/pantry/${pantry_item_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `u ${Userfront.tokens.accessToken}`,
      },
    });
    console.log(`success!! data here:"${res.data}"`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// APP RENDERING
const Pantry = () => {
  const navigate = useNavigate();
  const loggedIn = Userfront.accessToken();
  const [pantryData, setPantryData] = useState([]);

  const getPantry = () => {
    getPantryApi().then((pantryItems) => {
      setPantryData(pantryItems);
    });
  };

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/");
    } else {
      getPantry();
    }
  }, []);

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
      pantry_item_title: itemTitle,
      category: itemCategory,
      exp_date: itemExpDate,
    };
    addNewPantryItemApi(newItemData)
      .then((res) => {
        console.log(`${res} here`);
        setPantryData([...pantryData, res]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1 className="display-1">{Userfront.user["name"]}'s Pantry</h1>
      <h2 className="display-5">
        {pantryData === [] ? "Use the form to add to your pantry" : ""}
      </h2>
      <div className="row">
        <div className="col">
          <button
            className="my-3 btn btn-warning"
            style={{ color: "#531209" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Click here to add items to your pantry
          </button>
          <div className="collapse" id="collapseExample">
            <div
              className="card card-body"
              style={{ background: "darksalmon" }}
            >
              <AddPantryItemForm
                handlePantryItemSubmit={handlePantryItemSubmit}
              />
            </div>
          </div>
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

export default Pantry;