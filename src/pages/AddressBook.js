// ROUTER
import { Link } from "react-router-dom";

// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import Contact from "../components/Contact";
import ContactList from "../components/ContactList";
import AddContactForm from "../components/forms/AddContact";
import mockContacts from "../mockData/mockContact.js";

// AXIOS CALLS
import axios from "axios";

import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"

// APP RENDERING
const AddressBook = () => {
  // set useState hooks here
  const [contactData, setContactData] = useState(mockContacts);
  const userId = Userfront.user["userId"]
  // add handling functions here
  const handleContactSubmit = () => {
    console.log("add handleContactSubmit function here");
  };

  return (
    <div className="container">
      <h1 className="display-1">Anya's Address Book</h1>
      <div>
        Here goes AddNewContactForm:
        <AddContactForm 
          handleContactSubmit={handleContactSubmit}
          userId={userId}
        />
      </div>
      <div className="row">
        <p>ContactList (Contacts mapped out) here:</p>
        <ContactList
          contactData={contactData}
        />
      </div>
    </div>
  );
};

export default AddressBook;