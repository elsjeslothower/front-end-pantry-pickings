// ROUTER
import { Link } from "react-router-dom";

// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import Contact from "../components/Contact";
import ContactList from "../components/ContactList";
import mockContacts from "../data.js";

// AXIOS CALLS
import axios from "axios";

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"

// APP RENDERING
const AddressBook = () => {
  // set useState hooks here
  
  // add handling functions here

  return (
    <div>
      <h1>Welcome to your address book!</h1>
      <p>Include Contact component in here:</p>
      <Contact />
      <p>ContactList (contacts mapped out) here:</p>
      {/* <ContactList /> */}
      <p>_____________________________________</p>
      <h2>Original Contact data for reference:</h2>
      <p>
        {mockContacts.map(contact => <Contact {...contact} />)}
      </p>
      <Link to="/dashboard"><button>Click here to see nav bar</button></Link>
    </div>
  );
};

export default AddressBook;