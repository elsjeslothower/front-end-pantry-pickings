import { useState } from "react";
import "./forms.css"

const AddContactForm = ({ handleContactSubmit }) => {
  const [newContactName, setNewContactName] = useState("");
  const [newContactIntolerances, setNewContactIntolerances] = useState("");
  const [newContactDiet, setNewContactDiet] = useState([]);
  const [newContactNotes, setNewContactNotes] = useState("");

  const handleSubmitContact = (event) => {
    event.preventDefault();
    handleContactSubmit(newContactName, newContactIntolerances, newContactDiet, newContactNotes)
  };

  const handleNewContactName = (event) => {
    event.preventDefault();
    setNewContactName(event.target.value);
  };

  const handleNewContactIntolerances = (event) => {
    event.preventDefault();
    setNewContactIntolerances(event.target.value);
  };

  const handleNewContactDiet = (event) => {
    const diet = event.target.value;
    if (newContactDiet.includes(diet)) {
      newContactDiet.pop(diet);
      console.log(`${diet} popped`);
    } else {
      setNewContactDiet([...newContactDiet, diet]);
    }
  };

  const handleNewContactNotes = (event) => {
    event.preventDefault();
    setNewContactNotes(event.target.value);
  };
  
  return (
    <form onSubmit={handleSubmitContact} htmlFor="newContact" className="container">
      <div htmlFor="title" className="my-3">
        <label htmlFor="inputName" className="form-label">
          Contact Name
        </label>
        <input 
          type="text" 
          name="name"
          value={newContactName}
          onChange={handleNewContactName}
          className="form-control" 
          id="inputName" />
      </div>

      <div htmlFor="intolerances" className="my-3">
        <label htmlFor="inputIntolerances" className="form-label">
          Intolerances
        </label>
        <input 
          type="text" 
          name="intolerances"
          value={newContactIntolerances}
          onChange={handleNewContactIntolerances}
          className="form-control" 
          id="inputCategory" />
      </div>

      <div>
        <label htmlFor="inputDiet" className="form-label">
          Dietary Preferences
        </label>
        <div></div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="vegetarian"
              onChange={handleNewContactDiet}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Vegetarian
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="vegan"
              onChange={handleNewContactDiet}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Vegan
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="pescatarian"
              onChange={handleNewContactDiet}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              Pescatarian
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              value="gluten-free"
              onChange={handleNewContactDiet}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox4">
              Gluten-free
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox5"
              value="dairy-free"
              onChange={handleNewContactDiet}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox5">
              Dairy-free
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox6"
              value="paleo"
              onChange={handleNewContactDiet}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox6">
              Paleo
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox7"
              value="keto"
              onChange={handleNewContactDiet}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox7">
              Keto
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox8"
              value="other"
              onChange={handleNewContactDiet}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox8">
              Other
            </label>
          </div>
        </div>

      <div htmlFor="recipeOptions" className="my-3">
        <label htmlFor="inputOptions" className="form-label">
          Notes
        </label>
        <textarea
          className="form-control"
          name="notes"
          value={newContactNotes}
          onChange={handleNewContactNotes}
          aria-label="With textarea"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-warning" style={{ color:"#531209" }}>
        Add Contact
      </button>
    </form>
  );
};

export default AddContactForm;
