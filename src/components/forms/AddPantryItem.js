import { useState } from "react";

const AddPantryItemForm = ({ handlePantrySubmit, userId }) => {
  const [newItem, setNewItem] = useState("");

  const handleNewItem = (event) => {
    setNewItem(event.target.value);
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    handlePantrySubmit(newItem, userId);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmitItem} htmlFor="newPantryItem" className="container">
      <div htmlFor="title" className="my-3">
        <label htmlFor="inputTitle" className="form-label">Item</label>
        <input type="text" value={newItem} onChange={handleNewItem} className="form-control" id="inputTitle"/>
      </div>

      <div htmlFor="category" className="my-3">
        <label htmlFor="inputCategory" className="form-label">Category</label>
        <select class="form-select" aria-label="Default select example">
          <option value="15" selected>Other</option>
          <option value="1">Produce</option>
          <option value="2">Grains</option>
          <option value="3">Meat</option>
          <option value="4">Poultry</option>
          <option value="5">Seafood</option>
          <option value="6">Baking items</option>
          <option value="7">Spices</option>
          <option value="8">Sauces</option>
          <option value="9">Cooking items</option>
          <option value="10">Canned goods</option>
          <option value="11">Pasta/Rice</option>
          <option value="12">Beverages</option>
          <option value="13">Snacks</option>
          <option value="14">Sweets</option>
        </select>
      </div>

      <div htmlFor="expDate" className="my-3">
        <label htmlFor="inputExpDate" className="form-label">Expiration Date</label>
        <input type="text" className="form-control" placeholder="MM/DD/YYYY" id="inputExpDate"/>
      </div>
      <button type="submit" className="btn btn-warning">Add to Pantry</button>
    </form>
  )
}

export default AddPantryItemForm;