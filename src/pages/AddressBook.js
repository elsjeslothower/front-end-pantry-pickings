import Contact from "../components/Contact";

import mockContacts from "../data.js";

const AddressBook = () => {
  return (
    <div>
      Hello from Address Book!!
      Contacts go here:
      {mockContacts.map(contact => <Contact {...contact} />)}
    </div>
  );
};

export default AddressBook;