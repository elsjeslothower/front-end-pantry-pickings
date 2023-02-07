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
    <div className="container">
      <h1 className="row">Welcome to your address book!</h1>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <p className="col">Include Contact component in here:</p>
          <Contact />
        </div>
      </div>
      <p>_________________________________________</p>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <ContactList
          contactData={mockContacts}/>
        </div>
      </div>
      <div>
        Here goes AddNewContactForm:
      </div>
      <Link to="/dashboard"><button>Click here to see nav bar</button></Link>
    </div>
  );
};

export default AddressBook;