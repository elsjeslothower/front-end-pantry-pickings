import logo from './logo.svg'; // change this when convenient
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
// COMPONENTS

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"

const accessDashboardApi = (email, password) => {
  // add login verification here
};

const addUserApi = () => {
  // add user to db here
  // home: sign up page
};

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

const getContactsApi = (user_id) => {
  return axios
    .get(`${kBaseUrl}/user/${user_id}/contacts`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err)
    });
};

const getRecipesApi = (user_id) => {
  return axios
    .get(`${kBaseUrl}/user/${user_id}/recipes`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err)
    });
};

const addNewPantryItemApi = (currentUserID, inputTitle, inputCategory, inputDate) => {
  const currentData = {
    title: inputTitle,
    category: inputCategory,
    exp_date: inputDate,
    user_id: currentUserID,
  };

  return axios
    .post(`${kBaseUrl}/pantry`, currentData)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const addNewRecipeApi = (currentUserID, rId, title, rSummary, url, img) => {
  const currentData = {
    api_id: rId,
    recipe_title: title,
    summary: rSummary,
    source_url: url,
    recipe_img: img,
    user_id: currentUserID,
  };

  return axios
    .post(`${kBaseUrl}/recipes`, currentData)
    .then ((response) => {
      return response.data;
    })
    .catch((err) => {
      // maybe add error handling for api_id uniqueness
      console.log(err);
    });
};

const addNewContactApi = (currentUserID, inputName, inputIntolerances, inputNotes) => {
  const currentData = {
    full_name: inputName,
    intolerances: inputIntolerances,
    notes: inputNotes,
    user_id: currentUserID,
  };

  return axios
    .post(`${kBaseUrl}/contacts`, currentData)
    .then ((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Other Backend axios needed: user authentication/pwd encryption, 
// delete models, update contact model

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
