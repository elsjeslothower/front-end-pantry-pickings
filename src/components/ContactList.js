import React from "react";
import PropTypes from 'prop-types';
import Contact from "./Contact";

const ContactList = (props) => {
  return (
    props.contactData.map((contact) => (
      <Contact
        key={contact.contact_id}
        contact_id={contact.contact_id}
        full_name={contact.full_name}
        intolerances={contact.intolerances}
        dietary_preferences={contact.dietary_preferences}
        notes={contact.notes}
        onUpdateContact={props.onUpdateContact}
        onDeleteContact={props.onDeleteContact}
        handleContactSubmit={props.handleContactSubmit}
      />  
    ))
  );
};

ContactList.propTypes = {
  contactData: PropTypes.arrayOf(PropTypes.shape({
    contact_id: PropTypes.number.isRequired,
    full_name: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
  })),
  onUpdateContact:PropTypes.func.isRequired,
  onDeleteContact:PropTypes.func.isRequired,
  handleContactSubmit:PropTypes.func.isRequired,
};

export default ContactList;