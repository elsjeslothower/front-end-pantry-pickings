// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import ContactList from "../components/ContactList";
import AddContactForm from "../components/forms/AddContact";
import mockContacts from "../mockData/mockContact";

// USERFRONT
import Userfront from "@userfront/react";

// AXIOS CALLS
import axios from "axios";
const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/";
const localHost = "http://127.0.0.1:5000";

Userfront.init("6bg65zyn");

// API CALLS
const getContactsApi = async () => {
  try {
    const res = await axios.get(`${kBaseUrl}/user/contacts`, {
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

const addNewContactApi = async (req) => {
  console.log(req);
  try {
    const res = await axios.post(`${kBaseUrl}/contacts`, req, {
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

const deleteContactApi = async (contact_id) => {
  console.log(contact_id);
  try {
    const res = await axios.delete(`${kBaseUrl}/contacts/${contact_id}`, {
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

const updateContactApi = async () => {
  console.log("insert update contact axios call here");
};

// APP RENDERING
const AddressBook = () => {
  const navigate = useNavigate();
  const loggedIn = Userfront.accessToken();
  const [contactData, setContactData] = useState([]);
  const userId = Userfront.user["userId"];

  const getContacts = () => {
    getContactsApi().then((contacts) => {
      setContactData(contacts);
    });
  };

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/");
    } else {
      getContacts();
    }
  }, []);

  const updateContact = (contact_id) => {
    updateContactApi(contact_id);
    setContactData(contactData);
  };

  const deleteContact = (contact_id) => {
    deleteContactApi(contact_id);
    setContactData((contactData) =>
      contactData.filter((contact) => {
        return contact.contact_id !== contact_id;
      })
    );
  };

  const handleContactSubmit = (
    name,
    intolerances,
    dietaryPreferences,
    notes
  ) => {
    const newContactData = {
      full_name: name,
      intolerances: intolerances,
      dietary_preferences: dietaryPreferences,
      notes: notes,
    };
    console.log(newContactData);
    addNewContactApi(newContactData)
      .then((newContact) => {
        setContactData([...contactData, newContact]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1 className="display-1">{Userfront.user["name"]}'s Address Book</h1>
      <h2 className="display-5">
        {contactData === []
          ? "Use the form to add a friend to your address book"
          : ""}
      </h2>
      <div>
        <button
          className="my-3 btn btn-warning"
          style={{ color: "#531209" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Click here to add friends to your contacts
        </button>
        <div className="collapse" id="collapseExample">
          <div
            className="mb-3 card card-body"
            style={{ background: "darksalmon" }}
          >
            <AddContactForm handleContactSubmit={handleContactSubmit} />
          </div>
        </div>
      </div>
      <div className="mb-3 row">
        <ContactList
          contactData={contactData}
          onUpdateContact={updateContact}
          onDeleteContact={deleteContact}
          handleContactSubmit={handleContactSubmit}
        />
      </div>
    </div>
  );
};

export default AddressBook;
