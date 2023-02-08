

const AddContactForm = ({ handleContactSubmit, userId }) => {
  return (
    <form htmlFor="newPantryItem" className="container">
      <div htmlFor="title" className="mb-3">
        <label htmlFor="inputTitle" className="form-label">Contact Name</label>
        <input type="text" className="form-control" id="inputTitle"/>
      </div>

      <div htmlFor="category" className="mb-3">
        <label htmlFor="inputCategory" className="form-label">Intolerances</label>
        <input type="text" className="form-control" id="inputCategory"/>
      </div>

      <div htmlFor="category" className="mb-3">
        <label htmlFor="inputCategory" className="form-label">Dietary Preferences</label>
        <input type="text" className="form-control" id="inputCategory"/>
      </div>

      <div htmlFor="recipeOptions" className="mb-3">
        <label htmlFor="inputOptions" className="form-label">Notes</label>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <button type="submit" className="btn btn-warning">Add to Pantry</button>
    </form>
  )
}

export default AddContactForm;