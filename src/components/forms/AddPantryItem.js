import { useState } from "react";
import "./forms.css"

const AddPantryItemForm = ({ handlePantryItemSubmit }) => {
  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemExpDate, setNewItemExpDate] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Other");

  const handleSubmitItem = (event) => {
    event.preventDefault();
    handlePantryItemSubmit(newItemTitle, newItemCategory, newItemExpDate);
    // reset forms
    setNewItemTitle("");
    setNewItemExpDate("");
  };

  const handleNewItemTitle = (event) => {
    event.preventDefault();
    setNewItemTitle(event.target.value);
  };

  const handleNewItemCategory = (event) => {
    event.preventDefault();
    setNewItemCategory(event.target.value);
  };

  const handleNewItemExpDate = (event) => {
    event.preventDefault();
    setNewItemExpDate(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmitItem}
      htmlFor="newPantryItem"
      className="container form-a"
    >
      <div htmlFor="title">
        <label htmlFor="inputTitle" className="form-label">
          Item
        </label>
        <input
          type="text"
          name="title"
          value={newItemTitle}
          onChange={handleNewItemTitle}
          className="form-control"
          id="inputTitle"
        />
      </div>

      <div htmlFor="category" className="my-3">
        <label htmlFor="inputCategory" className="form-label">
          Category
        </label>
        <select 
          className="form-select" 
          name="category"
          defaultValue={newItemCategory}
          onChange={handleNewItemCategory}
          aria-label="Default select example"
        >
          <option value="Other">Other</option>
          <option value="Dairy">Dairy</option>
          <option value="Produce">Produce</option>
          <option value="Grains">Grains</option>
          <option value="Meat">Meat</option>
          <option value="Poultry">Poultry</option>
          <option value="Seafood">Seafood</option>
          <option value="Baking items">Baking items</option>
          <option value="Spices">Spices</option>
          <option value="Sauces">Sauces</option>
          <option value="Cooking items">Cooking items</option>
          <option value="Canned goods">Canned goods</option>
          <option value="Pasta/Rice">Pasta/Rice</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Sweets">Sweets</option>
        </select>
      </div>

      <div htmlFor="expDate" className="my-3">
        <label htmlFor="inputExpDate" className="form-label">
          Expiration Date
        </label>
        <input
          type="text"
          name="expDate"
          className="form-control"
          value={newItemExpDate}
          onChange={handleNewItemExpDate}
          placeholder="MM/DD/YYYY"
          id="inputExpDate"
          required
        />
      </div>
      <button type="submit" className="btn btn-warning" style={{ color:"#531209" }}>
        Add to Pantry
      </button>
    </form>
  );
};

export default AddPantryItemForm;
