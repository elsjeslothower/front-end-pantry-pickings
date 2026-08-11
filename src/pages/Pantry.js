// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CLERK
import { useAuth, useUser } from "@clerk/clerk-react";

// COMPONENTS
import PantryList from "../components/PantryList";
import AddPantryItemForm from "../components/forms/AddPantryItem";

// AXIOS CALLS
import axios from "axios";
const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

// API CALLS
const getPantryApi = async (token) => {
  try {
    const res = await axios
    .get(`${kBaseUrl}/user/pantry`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(`success getPantry!! data here:"${res.data}"`);
    console.log(res.data[0]);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const addNewPantryItemApi = async (req, token) => {
  console.log(req);
  try {
    const res = await axios.post(`${kBaseUrl}/pantry`, req, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`success!! data here:"${res.data}"`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const deletePantryItemApi = async (pantry_item_id, token) => {
  console.log(pantry_item_id);
  try {
    const res = await axios.delete(`${kBaseUrl}/pantry/${pantry_item_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [pantryData, setPantryData] = useState([]);

  const getPantry = () => {
    getToken().then((token) => {
      getPantryApi(token).then((pantryItems) => {
        setPantryData(pantryItems);
      });
    });
  };

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      navigate("/");
      return;
    }
    getPantry();
  }, [isLoaded, isSignedIn]);

  const deletePantryItem = (pantry_item_id) => {
    getToken().then((token) => deletePantryItemApi(pantry_item_id, token));
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
    getToken().then((token) => {
      addNewPantryItemApi(newItemData, token)
        .then((res) => {
          console.log(`${res} here`);
          setPantryData([...pantryData, res]);
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="container">
      <h1 className="display-1">{user?.fullName}'s Pantry</h1>
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