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
      <ContactList />
      <p>Original Contact data for reference:
      {mockContacts.map(contact => <Contact {...contact} />)}</p>
      <Link to="/dashboard"><button>Click here to see nav bar</button></Link>
    </div>
  );
};

export default AddressBook;